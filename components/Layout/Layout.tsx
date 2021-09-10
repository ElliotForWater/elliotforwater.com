import React, { FC, useContext } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Header from '../Header/Header'
import HeaderHome from '../HeaderHome/HeaderHome'
import Footer from '../Footer/Footer'
import styles from './Layout.module.css'
import Modal from '../Modal/Modal'
import { UserContext } from '../../context/UserContext'
interface LayoutProps {
  fluid?: boolean
  pageTitle: string
  pageDescription?: string
  isHome?: boolean
}

export const Layout: FC<LayoutProps> = ({ children, fluid, pageTitle, pageDescription, isHome }) => {
  const router = useRouter()
  const { query } = router.query
  const { userState } = useContext(UserContext)

  return (
    <div className={userState.isModalOpen ? styles.noOverflow : styles.overflow}>
      <Head>
        <title>{isHome || query ? pageTitle : `${pageTitle} - Elliot for Water`}</title>
        {/* <!-- Search Engine --> */}
        <meta name='description' content={pageDescription} />
        {/* <!-- Schema.org for Google --> */}
        <meta itemProp='name' content={isHome || query ? pageTitle : `${pageTitle} - Elliot for Water`} />
        <meta itemProp='description' content={pageDescription} />

        {/* <!-- Twitter --> */}
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:title' content={isHome || query ? pageTitle : `${pageTitle} - Elliot for Water`} />
        <meta name='twitter:description' content={pageDescription} />
        {/* <!-- Open Graph general (Facebook, Pinterest & Google+) --> */}
        <meta name='og:title' content={isHome || query ? pageTitle : `${pageTitle} - Elliot for Water`} />
        <meta name='og:description' content={pageDescription} />
        <meta name='og:url' content={process.env.NEXT_PUBLIC_BASE_URL} />
        <meta name='og:site_name' content='Elliot for Water' />
        <meta name='og:type' content='website' />

        {/* <!-- Apple Icons --> */}
        <link rel='apple-touch-icon' sizes='180x180' href='images/metas/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='images/metas/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='images/metas/favicon-16x16.png' />
        <link rel='manifest' href='images/metas/manifest.json' />
        <link rel='mask-icon' href='images/metas/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />

        {/* <!-- Google Search Console --> */}
        <meta name='google-site-verification' content='LCu_d-opmHAq1wVOCJcxwzZeEOwN9SRv2QKwSyq7ICc' />
      </Head>
      <div className={styles.wrapper}>
        {isHome ? <HeaderHome /> : <Header />}
        <main className={fluid ? styles.fluid : styles.container}>{children}</main>

        <cookie-policy />

        <Footer />

        <Modal.Host />
      </div>
    </div>
  )
}

export default Layout
