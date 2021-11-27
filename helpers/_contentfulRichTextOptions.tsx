// https://github.com/whitep4nth3r/p4nth3rblog/blob/main/components/RichTextPageContent/index.js

import BlogPostEmbed from '../components/RichTextOptions/BlogPostEmbed'
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types'

export function getRichTextRenderOptions(links) {
  const assetBlockMap = new Map(links?.assets?.block?.map((asset) => [asset.sys.id, asset]))
  const entryMap = new Map()
  if (links?.assets.block) {
    for (const entry of links.assets.block) {
      entryMap.set(entry.sys.id, entry)
    }
  }

  if (links?.assets.inline) {
    for (const entry of links.assets.inline) {
      entryMap.set(entry.sys.id, entry)
    }
  }

  return {
    renderMark: {
      [MARKS.BOLD]: (text) => <b>{text}</b>,
      [MARKS.CODE]: (text) => <code>{text}</code>,
    },

    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => (
        <a href={node.data.uri} target='_blank' rel='nofollow noreferrer'>
          {children}
        </a>
      ),
      // [INLINES.EMBEDDED_ENTRY]: (node, children) => {
      //   const entry = entryMap.get(node.data.target.sys.id);
      //   const { __typename } = entry;

      //   switch (__typename) {
      //     case "BlogPost":
      //       const { slug, title, featuredImage, excerpt } = entry;

      //       return (
      //         <>
      //           <ReactTooltip wrapper="span" />
      //           <Link href={`/blog/${slug}`}>
      //             <a
      //               data-arrow-color="#ffb626"
      //               data-effect="solid"
      //               data-html={true}
      //               data-type="dark"
      //               data-tip={buildBlogPostLinkTooltipHTML(
      //                 title,
      //                 featuredImage,
      //                 excerpt,
      //               )}
      //             >
      //               {title}
      //             </a>
      //           </Link>
      //         </>
      //       );
      //     default:
      //       return null;
      //   }
      // },
      [BLOCKS.HR]: (text) => <hr />,
      [BLOCKS.QUOTE]: (node, children) => <blockquote>{children}</blockquote>,
      [BLOCKS.UL_LIST]: (node, children) => <ul>{children}</ul>,
      [BLOCKS.OL_LIST]: (node, children) => <ol>{children}</ol>,
      [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
      [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
        const entry = entryMap.get(node.data.target.sys.id)
        const { __typename } = entry

        switch (__typename) {
          case 'BlogPost':
            return <BlogPostEmbed item={entry} />
          // case "TweetEmbed":
          //   const { tweetId } = entry;

          //   return <DynamicTweetEmbed tweetId={tweetId} />;
          case 'VideoEmbed':
            /* eslint-disable-next-line no-case-declarations */
            const { embedUrl, title } = entry

            return (
              <div>
                <iframe
                  src={embedUrl}
                  height='100%'
                  width='100%'
                  frameBorder='0'
                  scrolling='no'
                  title={title}
                  allowFullScreen
                />
              </div>
            )
          // case "CodeBlock":
          //   const { language, code } = entry;
          //   return <DynamicCodeBlock language={language} code={code} />;
          default:
            return null
        }
      },
      [BLOCKS.EMBEDDED_ASSET]: (node, next) => {
        const image: any = assetBlockMap.get(node.data.target.sys.id)

        return (
          <div>
            <img src={image.url} alt={image.title} />
          </div>
        )
      },
    },
  }
}
