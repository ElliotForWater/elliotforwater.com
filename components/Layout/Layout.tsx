import React, { FC, useEffect } from 'react'
import Head from 'next/head'
import Header from '../Header/Header'
import HeaderHome from '../HeaderHome/HeaderHome'
import Footer from '../Footer/Footer'
import styles from './Layout.module.css'

import * as settingsHelper from '../../helpers/_settingsHelper'

// prettier-ignore
interface LayoutProps {
  fluid?: boolean,
  pageTitle: string,
  pageDescription?: string,
  isHome?: boolean
}

const socialDescription = 'Search Engine which collects water to build well'

export const Layout: FC<LayoutProps> = ({
  children,
  fluid,
  pageTitle,
  pageDescription,
  isHome
}) => {
  useEffect(() => {
    import('../../webComponents/cookiePolicy')

    settingsHelper.initialise()
  }, [])

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>{pageTitle} - Elliot for Water</title>
        {/* <!-- Search Engine --> */}
        <meta name='description' content={pageDescription || socialDescription} />
        {/* <!-- Schema.org for Google --> */}
        <meta itemProp='name' content={`${pageTitle} - Elliot for Water`} />
        <meta itemProp='description' content={pageDescription || socialDescription} />
        {/* <!-- Twitter --> */}
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:title' content={`${pageTitle} - Elliot for Water`} />
        <meta name='twitter:description' content={pageDescription || socialDescription} />
        {/* <!-- Open Graph general (Facebook, Pinterest & Google+) --> */}
        <meta name='og:title' content={`${pageTitle} - Elliot for Water`} />
        <meta name='og:description' content={pageDescription || socialDescription} />
        <meta name='og:url' content='https://www.elliotforwater.com/' />
        <meta name='og:site_name' content='Elliot for Water' />
        <meta name='og:type' content='website' />

        {/* <!-- Font awesome --> */}
        <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.0.1/css/all.css' />

        {/* <!-- Styles --> */}
        <link
          rel='stylesheet'
          href='//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css'
        />

        {/* <!-- Apple Icons --> */}
        <link rel='apple-touch-icon' sizes='180x180' href='images/metas/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='images/metas/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='images/metas/favicon-16x16.png' />
        <link rel='manifest' href='images/metas/site.webmanifest' />
        <link rel='mask-icon' href='images/metas/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />
      </Head>
      <div className={styles.wrapper}>
        {isHome ? <HeaderHome /> : <Header />}
        <main className={fluid ? styles.fluid : styles.container}>{children}</main>
        <Footer />
      </div>

      {/* Scripts */}
      <script src='/lib/jquery/dist/jquery.min.js' />
      <script src='//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js' />
      <script src='/js/odometer.js' />
    </div>
  )
}

export default Layout
