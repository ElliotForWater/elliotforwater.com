<script setup lang="ts">
import { RouterLink } from 'vue-router';
import Footer from '@/components/common/Footer.vue';
import Navbar from '@/components/common/Navbar.vue';
</script>

<template>
  <Navbar />
  <div class="flex flex-row justify-center px-5">
    <div class="flex flex-col mt-10 text-14 text-left mb-20" style="max-width: 900px">
      <div class="flex flex-row">
        <RouterLink to="/" class="w-24 sm:w-30 lg:w-46">
          <img src="/logos/app-logo.svg" alt="logo" class="w-full" />
        </RouterLink>
        <div class="w-3/4">
          <div class="text-right mt-3 font-bold">Elliot for Water Organisation Ltd.</div>
          <div class="text-right mt-2">Company Number 12428080</div>
          <div class="text-right mt-2">International House, 36-38 Cornhill, London, England, EC3V 3NG</div>
          <div class="text-right mt-5">21 October 2025</div>
        </div>
      </div>
      <div class="text-center mt-10"><h3 class="font-bold text-16">Privacy Policy</h3></div>
      <div class="policy-content text-16">
        <div>Your privacy is important to us.</div>
        <div>
          This Privacy Policy describes how Elliot for Water Organisation Ltd (“we”, “our”, or “us”) handles information in connection with our website and browser extension, Elliot for Water.
        </div>
        <div class="font-bold">1. Who We Are</div>
        <div>Elliot for Water is a browser extension that turns your new tab into a productivity dashboard, while supporting clean water projects around the world.</div>
        <div>
          We are:<br />
          Elliot for Water Organisation Ltd<br />
          Company number: 12428080<br />
          Registered office: International House, 36–38 Cornhill, London, England, EC3V 3NG<br />
          Contact: info@elliotforwater.com
        </div>
        <div class="font-bold">2. What Personal Data We Collect</div>
        <div>
          We currently do not collect, store, or process any personal data from users of our website or browser extension.<br />
          We do not require you to create an account<br />
          We do not use analytics or tracking tools<br />
          We do not collect IP addresses, emails, names, or any identifiers<br />
        </div>
        <div class="font-bold">3. Cookies and Tracking</div>
        <div>We do not use cookies or similar technologies on our website or browser extension. For more information, see our Cookie Policy.</div>
        <div class="font-bold">4. Data Sharing</div>
        <div>Since we do not collect any personal data, we do not share your data with any third parties.</div>
        <div class="font-bold">5. Third-Party Links</div>
        <div>
          Our site or extension may contain links to third-party websites (e.g. clean water partners, donation pages). We are not responsible for their privacy practices. We encourage you to review
          their privacy policies separately.
        </div>
        <div class="font-bold">6. Children’s Privacy</div>
        <div>Our service is not intended for children under the age of 13. We do not knowingly collect personal data from anyone under this age.</div>
        <div class="font-bold">7. Changes to This Policy</div>
        <div>We may update this Privacy Policy to reflect changes to our service or legal obligations. When we do, we’ll update the date at the top of this page.</div>
        <div class="font-bold">8. Contact Us</div>
        <div>
          If you have any questions about this Privacy Policy or your data, please contact:<br />
          info@elliotforwater.com
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<style lang="css">
.policy-content > div {
  margin-top: 20px;
}

.policy-content > h3 {
  margin-top: 20px;
  margin-bottom: -10px;
}

.policy-content > table td {
  vertical-align: top;
  padding: 4px;
}

.policy-content > table:not(.borderless) {
  border-collapse: collapse;
  border: solid 1px black;
}

.policy-content > td,
th {
  border: solid 1px black;
}
</style>
