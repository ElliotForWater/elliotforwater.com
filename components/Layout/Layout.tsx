import React, { FunctionComponent } from 'react'
import Head from 'next/head'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import styles from './Layout.module.css'

type LayoutProps = {
  fluid?: Boolean,
  pageTitle: string,
  pageDescription?: string
}

const socialDescription = 'Search Engine which collects water to build well'

export const Layout: FunctionComponent<LayoutProps> = ({
  children,
  fluid,
  pageTitle,
  pageDescription
}) => {
  return (
    <div>
      <Head>
        <title>{pageTitle} - Elliot for Water</title>
        {/* <!-- Search Engine --> */}
        <meta
          name="description"
          content={pageDescription || socialDescription}
        />
        {/* <!-- Schema.org for Google --> */}
        <meta itemProp="name" content={`${pageTitle} - Elliot for Water`} />
        <meta
          itemProp="description"
          content={pageDescription || socialDescription}
        />
        {/* <!-- Twitter --> */}
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content={`${pageTitle} - Elliot for Water`}
        />
        <meta
          name="twitter:description"
          content={pageDescription || socialDescription}
        />
        {/* <!-- Open Graph general (Facebook, Pinterest & Google+) --> */}
        <meta name="og:title" content={`${pageTitle} - Elliot for Water`} />
        <meta
          name="og:description"
          content={pageDescription || socialDescription}
        />
        <meta name="og:url" content="https://www.elliotforwater.com/" />
        <meta name="og:site_name" content="Elliot for Water" />
        <meta name="og:type" content="website"></meta>
      </Head>
      <div>
        <Header />
        <main className={fluid ? styles.fluid : styles.container}>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
