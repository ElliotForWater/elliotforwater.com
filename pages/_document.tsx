import Document, { Html, Head, Main, NextScript } from 'next/document'

import { GA_TRACKING_ID } from '../helpers/_gtag'

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel='search'
            type='application/opensearchdescription+xml'
            title='ElliotForWater'
            href='/opensearch.xml'
          />
          {process.env.NEXT_PUBLIC_IS_PRODUCTION && (
            <>
              {/* Global Site Tag (gtag.js) - Google Analytics */}
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${GA_TRACKING_ID}', {
                      page_path: window.location.pathname,
                    });
                  `,
                }}
              />
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
