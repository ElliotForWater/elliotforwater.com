import React, { useState, useEffect } from 'react'
import useTranslation from 'next-translate/useTranslation'
import Layout from '../components/Layout/Layout'
import Hero from '../components/Hero/Hero'
import fetchContenful from '../helpers/_fetchContentful'
import ContactUsForm from '../components/Forms/Contact/ContactForm'
import ReactMarkdown from 'react-markdown'
import dynamic from 'next/dynamic'
import Person from '../components/Person/Person'
import Loader from '../components/Loader/Loader'
import ButtonPrimary from '../components/Buttons/ButtonPrimary/ButtonPrimary'

const Projectslides = dynamic(() => import('../components/Sliders/ProjectSliders'), { ssr: false })

About.getInitialProps = async () => {
  const { aboutUsPage } = await fetchContenful(
    'aboutUs',
    `{
    aboutUsPage(id: "74N0U1LNjfceeBVytfHC93", preview: false){
      hero{
        title,
        subtitle,
        backgroundImage{
          url
        }
      },
      firstSectionTitle,
      firstSectionContent,
      quote,
      projectTitle,
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
      history,
      historyDatesCollection{
        items {
          date,
          title,
          description
        }
      },
      founderTitle,
      founder{
        name,
        longDescription,
        profilePic{
          url,
          title
        },
        socialLinksCollection(limit: 4) {
          items {
            name,
            link
          }
        }
      },
      team,
      teamPicCollection{
        items {
          name,
          profilePic {
            url,
            title
          },
          shortDescription,
          socialLinksCollection(limit: 4) {
            items {
              name,
              link
            }
          }
        }
      },
      volunteerTitle,
      volunteersPicCollection{
        items {
          name,
          profilePic {
            url,
            title
          },
          shortDescription,
          longDescription,
          socialLinksCollection(limit: 4) {
            items {
              name,
              link
            }
          }
        }
      },
      opensourceTitle,
      opensourceDescription,
    	contactUsTitle
    }
  }`
  )

  return {
    aboutUsPage: aboutUsPage,
  }
}

function About({ aboutUsPage }) {
  const { t } = useTranslation()
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    if (aboutUsPage) {
      setIsLoading(false)
    }
  }, [])

  const {
    hero,
    firstSectionTitle,
    firstSectionContent,
    projectsCarouselCollection,
    quote,
    history,
    historyDatesCollection,
    founderTitle,
    founder,
    team,
    teamPicCollection,
    volunteerTitle,
    volunteersPicCollection,
    opensourceTitle,
    opensourceDescription,
    contactUsTitle,
  } = aboutUsPage

  return (
    <Layout pageTitle={t('about:pageTitle')} pageDescription={t('about:pageTitle')} fluid>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Hero imageUrl={hero.backgroundImage.url} title={hero.title} subtitle={hero.subtitle} withBrowserCta />
          <section className='sections'>
            <div className='containerCenter mission'>
              <h2 className='titleWithDivider'>{firstSectionTitle}</h2>
              <div className='divider' />
              <p>{firstSectionContent}</p>
            </div>
          </section>
          <section className='sections'>
            <div className='containerCenter'>
              <blockquote>{quote}</blockquote>
            </div>
          </section>
          <section>
            <div className='currentProjectWrap'>
              <Projectslides slides={projectsCarouselCollection.items} />
            </div>
          </section>
          <section className='sections'>
            <div className='containerCenterLarger'>
              <h2>{history}</h2>
              <div className='historyDatesContainer'>
                {historyDatesCollection.items.map(({ date, title, description }, index) => (
                  <div className='historyWrap' key={index}>
                    <h4>{date}</h4>
                    <div>{title}</div>
                    <div className='historyDivider' />
                    <p>{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className='sections'>
            <div className='containerCenterLarger'>
              <h2>{founderTitle}</h2>
              <div className='founderWrap'>
                <Person profilePic={founder.profilePic} longDescription={founder.longDescription} size='big' />
              </div>
            </div>
          </section>
          <section className='sections'>
            <div className='teamContainer'>
              <h2 className='titleWithDivider'>{team}</h2>
              <div className='divider' />
              <div className='teamWrap'>
                {teamPicCollection.items.map((member, index) => (
                  <Person
                    key={index}
                    name={member.name}
                    profilePic={member.profilePic}
                    shortDescription={member.shortDescription}
                    socialLinks={member.socialLinksCollection.items}
                  />
                ))}
              </div>
            </div>
            <div className='volunteersContainer'>
              <h4 className='volunteersTitle'>{volunteerTitle}</h4>
              <div className='volunteersWrap'>
                {volunteersPicCollection.items.map((member, index) => (
                  <Person
                    key={index}
                    name={member.name}
                    profilePic={member.profilePic}
                    shortDescription={member.shortDescription}
                    socialLinks={member.socialLinksCollection.items}
                    size='small'
                  />
                ))}
              </div>
            </div>
          </section>
          <section className='sections'>
            <div className='containerCenter opensourceContainer'>
              <h2 className='titleWithDivider'>{opensourceTitle}</h2>
              <div className='divider' />
              <p className='opensourceDescription'>
                <ReactMarkdown>{opensourceDescription}</ReactMarkdown>
              </p>
              <ButtonPrimary linkHref='https://github.com/ElliotForWater/efw-webapp' target='_blank'>
                Join us
              </ButtonPrimary>
            </div>
          </section>
          <section className='sections contactus' id='contact'>
            <div className='containerCenter'>
              <h2>{contactUsTitle}</h2>
              <ContactUsForm
                customStyle={{
                  background: 'var(--elliotCta)',
                  color: 'white',
                  backgroundHover: 'var(--elliotCta)',
                  colorHover: 'white',
                }}
              />
            </div>
          </section>
        </>
      )}
      <style jsx>
        {`
          .sections {
            padding: 40px 15px;
            text-align: center;
          }

          .sectionAllWidth {
            padding: 15px 0;
            text-align: center;
          }

          .sections:nth-child(odd) {
            background: var(--lightGreyBackground);
          }

          #contact {
            background: var(--elliotSecondary);
            color: white;
          }

          .containerCenter {
            max-width: 700px;
            margin: 0 auto;
          }

          .containerCenterLarger {
            max-width: 900px;
            margin: 0 auto;
          }

          h2 {
            padding: 0;
            margin: 0;
            padding-bottom: 18px;
          }

          .titleWithDivider {
            padding-bottom: 10px;
          }

          .mission p {
            font-size: 16px;
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

          .historyDatesContainer {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          .historyWrap {
            padding-bottom: 40px;
            max-width: 200px;
          }

          .historyDivider {
            height: 4px;
            width: 50px;
            background: var(--elliotSecondary);
            margin: 5px auto 12px;
          }

          .founderWrap img {
            padding-bottom: 20px;
          }

          .teamContainer {
            padding-bottom: 30px;
          }

          .teamWrap {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }

          .volunteersWrap {
            display: flex;
            justify-content: center;
          }

          .volunteersTitle {
            padding-bottom: 15px;
          }

          .opensourceContainer h4 {
            padding-top: 40px;
            padding-bottom: 20px;
          }

          .opensourceDescription {
            font-size: 18px;
            padding-bottom: 40px;
          }

          @media (min-width: 768px) {
            .sections {
              padding: 50px 15px;
            }

            h2 {
              padding-bottom: 25px;
            }

            .mission p {
              font-size: 16px;
            }

            blockquote {
              padding: 40px;
            }

            .historyDatesContainer {
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: space-evenly;
            }

            .historyWrap {
              padding: 0 20px;
            }

            .teamWrap {
              flex-direction: row;
              justify-content: space-evenly;
              margin-bottom: 40px;
              align-items: flex-start;
            }
          }

          @media (min-width: 1100px) {
            .sections {
              padding: 100px 25px;
            }

            h2 {
              padding-bottom: 40px;
            }

            blockquote {
              padding: 60px;
            }
          }
        `}
      </style>
    </Layout>
  )
}

export default About
