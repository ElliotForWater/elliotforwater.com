const contentulUrl = process.env.NEXT_PUBLIC_CONTENTFUL_GRAPHQL_URL
const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

// RichFormat text with Graphql: https://www.contentful.com/blog/2021/04/14/rendering-linked-assets-entries-in-contentful/
export async function fetchContenful(query: string) {
  try {
    const res = await fetch(`${contentulUrl}/${space}/environments/master`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ query }),
    })
    const { data } = await res.json()
    return data
  } catch (error) {
    console.error(`There was a problem retrieving entries with the query ${query}`)
    console.error(error)
  }
}

export default fetchContenful
