import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Layout from '../components/Layout/Layout'
import Hero from '../components/Hero/Hero'
import fetchContenful from '../helpers/_fetchContentful'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import ContactUsForm from '../components/Forms/Contact/ContactForm'

export async function getStaticProps() {
  const { aboutUsPage } = await fetchContenful(`
  {
    aboutUsPage(id: "74N0U1LNjfceeBVytfHC93", preview: false){
      hero{
        title,
        backgroundImage{
          url
        }
      },
      firstSectionTitle,
      firstSectionContent,
      quote,
      projectsCollection{
        items{
          title,
          conten,
          image{
            url,
            title
          },
          ctaLabel,
          ctaLink
        }
      },
      founderTitle,
      founder{
        longDescription,
        profilePic{
          url,
          title
        }
      },
      team,
      teamPicCollection {
				items {
          profilePic {
            url,
            title
          },
          shortDescription
        }				
      },
    	contactUsTitle
    }
  }`)

  // console.log(aboutUsPage)

  return {
    props: {
      aboutUsPage: aboutUsPage,
    },
  }
}

function About(aboutUsPage) {
  const { t } = useTranslation()
  const {
    hero,
    firstSectionTitle,
    firstSectionContent,
    quote,
    founderTitle,
    founder,
    team,
    teamPicCollection,
    contactUsTitle,
  } = aboutUsPage.aboutUsPage

  console.log(hero.backgroundImage)
  return (
    <Layout pageTitle={t('about:pageTitle')} pageDescription={t('about:pageTitle')} fluid>
      <Hero imageUrl={hero.backgroundImage.url} title={hero.title} withBrowserCta />
      <section>
        <h2>{firstSectionTitle}</h2>
        <p>{firstSectionContent}</p>
      </section>
      <section>
        <blockquote>{quote}</blockquote>
      </section>
      <section>
        <div className='currentProjectWrap'>
          <div>
            <h3>Project</h3>
            <div>info about the project</div>
          </div>
          <div>image gallery</div>
        </div>
        <div className='nextProjectWrap'>
          <div className='nextProject'>Ghana</div>
          <div className='nextProject'>India</div>
        </div>
      </section>
      <section>
        <h2>{founderTitle}</h2>
        <div className='founderWrap'>
          <img src={founder?.profilePic?.url} alt={founder?.profilePic?.title} />
          <div
            dangerouslySetInnerHTML={{
              __html: documentToHtmlString(founder?.longDescription.json),
            }}
          />
        </div>
      </section>
      <section>
        <h2>{team}</h2>
        <div className='teamWrap'>
          {teamPicCollection.items.map((member, index) => (
            <div key={index}>
              <img src={member.profilePic.url} alt={member.profilePic.title} />
              <div>{member.shortDescription}</div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h3>{contactUsTitle}</h3>
        <ContactUsForm />
      </section>

      <style jsx>
        {`
          .section {
            height: 100vh;
          }

          .hero {
            text-align: right;
          }

          .blueText {
            color: var(--elliot-primary-color, #4aacc2);
          }

          .hero:after {
            content: '';
            width: 100%;
            height: 100%;
            background: url('/images/waves.png') no-repeat;
            position: absolute;
            bottom: 0;
            right: 0;
          }
        `}
      </style>
    </Layout>
  )
}

export default About
