import React from 'react'
// import useTranslation from 'next-translate/useTranslation'
import Layout from '../components/Layout/Layout'

function Privacy () {
  // const { t } = useTranslation()

  return (
    <Layout fluid pageTitle='Privacy' pageDescription='Read about our privacy'>
      <div className='old_container'>
        <h2 className='title'>Privacy</h2>
        <p>
          Elliot for Water takes into great consideration your privacy. We want you to fully
          understand our privacy practices and to be aware of the rights you can exercise.
        </p>
      </div>
      <div className='content full' id='content'>
        <div className='old_container'>
          <h3>We use cookies to provide and improve our services</h3>
          <p>
            We may process your personal data as mentioned above as a result of using cookies and
            other tracking technologies. <br />
            In particular, we utilise cookies to improve your experience on our website.
          </p>
          <h3>We collect your data to provide you with our services</h3>
          <p>
            When you use our website, in order to offer you the most efficient search engine we may
            collect your personal data, namely your IP address, and your location. When you
            subscribe to our newsletter, we collect your e-mail address as you fill in the
            registration form.
          </p>
          <h3>We only process your personal data with legal basis</h3>
          <p>
            We make sure to comply with the existing laws and therefore we only process your
            personal data on legal basis.
            <br />
            In particular, processing your data when you use our search engine is necessary for us
            to be able to perform the contract we entered into with you and provide you with our
            services. On the other hand, when you register for your personal account or subscribe to
            our newsletter, we collect the data on the basis of your consent.
          </p>
          <h3>We share your data with our search provider</h3>
          <p>
            Some of the web search services provided herein are provided by providers of third party
            web search services. For information on the web search services data collection, please
            visit the end-user privacy statements of CodeFuel at{' '}
            <a target='_blank' href='http://www.codefuel.com/legal/end_user_privacy_policy'>
              http://www.codefuel.com/legal/end_user_privacy_policy
            </a>{' '}
            and Bing
            <a href='http://go.microsoft.com/fwlink/?LinkId=521839'>
              http://go.microsoft.com/fwlink/?LinkId=521839,
            </a>{' '}
            both as updated from time to time and at any successor locations.
          </p>

          <p>
            {' '}
            Do not worry: our provider is required under contract to keep confidential and secure
            the information they process on our behalf. Moreover, even if our provider is located in
            a country which may not provide the same level of personal data protection as the
            country you are located, we will take steps to ensure that the personal data we transfer
            is adequately protected as required by applicable data protection laws.
          </p>

          <p> We do not have any interest in further selling, renting or leasing your data.</p>

          <p>
            {' '}
            We would only share your personal data with third parties without your permission in the
            following cases: (1) to respond to duly authorised information requests of police and
            governmental authorities; (2) to comply with laws, regulations, subpoenas or court
            orders; (3) to enforce/protect our rights and properties; or (4) to protect the rights
            or personal safety of Elliot for Water, our employees and third parties on or using our
            property when allowed, and in each case in accordance with applicable law.
          </p>

          <h3>We apply security measures to protect your data against data breach</h3>

          <p>
            In order to protect your personal data from loss, or unauthorised use, access or
            disclosure, we adopt reasonable and appropriate physical, technical and administrative
            procedures to guarantee that the information we collect and process are safe at all
            times.
          </p>

          <h3>
            Your data is retained only for the time necessary to provide you with our services
          </h3>

          <p>
            We keep personal data for the length of any contractual relationship and, to the extent
            permitted by applicable laws, after the end of that relationship for as long as
            necessary to perform purposes set out in this Policy, to protect Elliot for Water from
            legal claims and administer our business. e.g. We will retain your e-mail account until
            you unsubscribe to our newsletter. When we no longer need to use your personal data, we
            will delete it from our systems and records, or take steps to anonymise the data unless
            we need to keep it longer to comply with a legal or regulatory obligation.
          </p>

          <h3>What are cookies?</h3>

          <p>
            Cookies are small text files that are placed on your device by websites that you visit.
            They are widely used in order to make websites work, or work more efficiently, as well
            as to provide information to the owners of the site. We do utilise necessary technical
            cookies to make our website work at full capacity and be able to provide you with our
            services. Opting-out from these necessary cookies would disrupt our website, therefore
            there is no option for them.
            <br /> When you accept our Terms & Condition you agree to our use of technical cookies.
            Like other search engines do, we also allow third-party advertising companies to use
            cookies on our website in order to optimise and personalise our advertisements and
            marketing. When you click on these ads, you help us earn income that will support our
            projects to help people access clean water. We may use retargeting and behavioural
            advertising technologies to tailor those advertisements to your perceived interests.
          </p>

          <h3>You can contact us at any time</h3>

          <p>
            If you have any questions, concerns or complaints about the present Policy, or wish to
            report to us a possible data breach of your privacy, we encourage you to contact us by
            e-mail. We will come right back to you as soon as possible.
          </p>

          <p>Email: info@elliotforwater.com</p>
        </div>
        {/* <!-- end container --> */}
        {/* <cookie-policy></cookie-policy> */}
      </div>
    </Layout>
  )
}

export default Privacy
