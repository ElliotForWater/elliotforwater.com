import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Layout from '../components/Layout/Layout'
import Hero from '../components/Hero/Hero'
import fetchContenful from '../helpers/_fetchContentful'
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
        socialLinksCollection {
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
          shortDescription
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
        }
      },
      opensourceTitle,
      opensourceDescription,
    	contactUsTitle
    }
  }`)

  // console.log(aboutUsPage.teamPicCollection.items)

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
      <section>
        <div className='currentProjectWrap'>
          <ProjectSliders slides={projectsCarouselCollection.items} />
        </div>
      </section>
      <section className='sections'>
        <div className='containerCenter'>
          <h2>{history}</h2>
          {historyDatesCollection.items.map(({ date, title, description }, index) => (
            <div className='historyWrap' key={index}>
              <h4>{date}</h4>
              <div>{title}</div>
              <hr />
              <p>{description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className='sections'>
        <div className='containerCenter'>
          <h2>{founderTitle}</h2>
          <div className='founderWrap'>
            <img src={founder.profilePic.url} alt={founder.profilePic.title} />
            <p>{founder.longDescription}</p>
          </div>
        </div>
      </section>
      <section className='sections'>
        <div className='teamContainer'>
          <h2>{team}</h2>
          <div className='teamWrap'>
            {teamPicCollection.items.map((member, index) => (
              <div key={index} className='memberContainer'>
                <img src={member.profilePic.url} alt={member.profilePic.title} />
                <p className='memberName'>{member.name}</p>
                <p className='memberDescription'>{member.shortDescription}</p>
              </div>
            ))}
          </div>
        </div>
        <div className='volunteersContainer'>
          <h4>{volunteerTitle}</h4>
          <div className='volunteersWrap'>
            {volunteersPicCollection.items.map((member, index) => (
              <div key={index} className='volunteerContainer'>
                <img src={member.profilePic.url} alt={member.profilePic.title} />
                <p className='volunteerName'>{member.name}</p>
                <p className='volunteerDescription'>{member.shortDescription}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className='sections'>
        <div className='containerCenter opensourceContainer'>
          <h2>{opensourceTitle}</h2>
          <p>{opensourceDescription}</p>
          <a href='https://github.com/ElliotForWater/efw-webapp'>https://github.com/ElliotForWater/efw-webapp</a>
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
            padding: 40px 15px;
            text-align: center;
          }

          .sectionAllWidth {
            padding: 15px 0;
            text-align: center;
          }

          .sections:nth-child(odd) {
            background: #f7f7f7;
          }

          .containerCenter {
            max-width: 700px;
            margin: 0 auto;
          }

          h2 {
            padding: 0;
            margin: 0;
            padding-bottom: 18px;
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

          .historyWrap {
            padding-bottom: 40px;
          }

          .founderWrap img {
            padding-bottom: 20px;
          }

          .teamContainer {
            padding-bottom: 30px;
          }

          .teamWrap,
          .volunteersWrap {
            display: flex;
            justify-content: center;
            align-items: flex-start;
          }

          .memberContainer {
            max-width: 50%;
            margin: 0 20px;
          }

          .memberContainer img,
          .volunteerContainer img {
            border-radius: 50%;
            max-width: 150px;
            width: 100%;
          }

          .memberName {
            padding-top: 15px;
          }

          .memberDescription {
            font-weight: bold;
          }

          .volunteerContainer {
            max-width: 15%;
            margin: 0 20px;
            font-size: 15px;
            line-height: 1.2;
            text-align: left;
          }

          .volunteerName {
            padding-top: 15px;
          }

          .volunteerDescription {
            font-weight: bold;
            padding-top: 8px;
          }

          .opensourceContainer h4 {
            padding-top: 40px;
            padding-bottom: 20px;
          }

          @media (min-width: 768px) {
            .sections {
              padding: 25px;
            }

            .memberContainer {
              max-width: 25%;
            }
          }
        `}
      </style>
    </Layout>
  )
}

export default About
