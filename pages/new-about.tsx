import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Layout from '../components/Layout/Layout'
import Hero from '../components/Hero/Hero'
import fetchContenful from '../helpers/_fetchContentful'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import ContactUsForm from '../components/Forms/Contact/ContactForm'
import ProjectSliders from '../components/Sliders/ProjectSliders'

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
      projectsCarouselCollection{
        items{
          title,
          text,
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
    projectsCarouselCollection,
    quote,
    founderTitle,
    founder,
    team,
    teamPicCollection,
    contactUsTitle,
  } = aboutUsPage.aboutUsPage

  return (
    <Layout pageTitle={t('about:pageTitle')} pageDescription={t('about:pageTitle')} fluid>
      <Hero imageUrl={hero.backgroundImage.url} title={hero.title} withBrowserCta />
      <section className='sections'>
        <div className='containerCenter'>
          <h2>{firstSectionTitle}</h2>
          <p>{firstSectionContent}</p>
        </div>
      </section>
      <section className='sections'>
        <div className='containerCenter'>
          <blockquote>{quote}</blockquote>
        </div>
      </section>
      <section className='sections'>
        <div className='currentProjectWrap'>
          <div>
            <h3>Project</h3>
          </div>
          <ProjectSliders slides={projectsCarouselCollection.items} />
        </div>
      </section>
      <section className='sections'>
        <div className='containerCenter'>
          <h2>{founderTitle}</h2>
          <div className='founderWrap'>
            <img src={founder.profilePic?.url} alt={founder.profilePic?.title} />
            <div
              dangerouslySetInnerHTML={{
                __html: documentToHtmlString(founder.longDescription.json),
              }}
            />
          </div>
        </div>
      </section>
      <section className='sections'>
        <h2>{team}</h2>
        <div className='teamWrap'>
          {teamPicCollection.items.map((member, index) => (
            <div key={index} className='teamContainer'>
              <img src={member.profilePic.url} alt={member.profilePic.title} />
              <p>{member.shortDescription}</p>
            </div>
          ))}
        </div>
      </section>
      <section className='sections'>
        <div className='containerCenter volunteerSection'>
          <h2>We are open source</h2>
          <p>Our project is open source and you can help out too</p>
          <p>Link to Github repo</p>

          <h4>Special thanks goes to:</h4>
          <div className='volunteerWrap'>
            {teamPicCollection.items.map((member, index) => (
              <div key={index} className='volunteerContainer'>
                <img src={member.profilePic.url} alt={member.profilePic.title} />
                <p>{member.shortDescription}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className='sections'>
        <div className='containerCenter'>
          <h2>{contactUsTitle}</h2>
          <ContactUsForm />
        </div>
      </section>

      <style jsx>
        {`
          .sections {
            padding: 15px;
            text-align: center;
          }

          .sections:nth-child(odd) {
            background: #f7f7f7;
          }

          .containerCenter {
            max-width: 700px;
            margin: 0 auto;
            padding-bottom: 40px;
          }

          h2 {
            padding-bottom: 18px;
            padding-top: 0;
          }

          blockquote {
            font-size: 28px;
            font-size: 2em;
            font-weight: 700;
            padding: 20px 0;
            max-width: 700px;
            margin: 0 auto;
            border: 0;
          }

          .teamWrap,
          .volunteerWrap {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .teamContainer {
            max-width: 25%;
            margin: 0 20px;
          }

          .teamContainer img,
          .volunteerContainer img {
            border-radius: 50%;
            max-width: 150px;
            width: 100%;
          }

          .teamContainer p {
            padding-top: 15px;
            font-weight: bold;
          }

          .volunteerContainer {
            max-width: 10%;
            margin: 0 20px;
          }

          .volunteerSection h4 {
            padding-top: 40px;
            padding-bottom: 20px;
          }

          @media (min-width: 768px) {
            .sections {
              padding: 25px;
            }
          }
        `}
      </style>
    </Layout>
  )
}

export default About
