interface FeedItem {
  title: string;
  link: string;
  enclosure: string;
  description: string;
  pubDate: string;
}

interface Feed {
  title: string;
  link: string;
  description: string;
  items: FeedItem[];
}

async function fetchRSSFeed(url: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const rssText = await response.text(); // Get the raw XML content as text
    return rssText;
  } catch (error) {
    console.error('Error fetching RSS feed:', error);
    return null;
  }
}

function parseRSSFeed(xmlString: string): { items: FeedItem[] | null } {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlString, 'text/xml');

  // Extract channel information
  const channel = xmlDoc.querySelector('channel');
  if (channel) {
    const feed: Feed = {
      title: channel?.querySelector('title')?.textContent || '',
      link: channel?.querySelector('link')?.textContent || '',
      description: channel?.querySelector('description')?.textContent || '',
      items: []
    };

    // Extract individual feed items
    const items = xmlDoc.querySelectorAll('item');
    items.forEach(item => {
      feed.items.push({
        title: item.querySelector('title')?.textContent || '',
        link: item.querySelector('link')?.textContent || '',
        enclosure: item.querySelector('enclosure')?.getAttribute?.('url') || '',
        description: item.querySelector('description')?.textContent || '',
        pubDate: item.querySelector('pubDate')?.textContent || ''
        // Add other relevant fields as needed (e.g., author, category)
      });
    });

    return feed;
  }

  return { items: [] };
}

async function getAndParseRSS(rssUrl: string): Promise<{ items: FeedItem[] | null }> {
  const xmlString = await fetchRSSFeed(rssUrl);
  if (xmlString) {
    const parsedFeed = parseRSSFeed(xmlString);
    return parsedFeed;
  }
  return { items: [] };
}

export default getAndParseRSS;