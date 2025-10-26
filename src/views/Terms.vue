<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
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
      <div class="text-center mt-10"><h3 class="font-bold text-16">Terms of Use</h3></div>
      <div class="policy-content text-16">
        <div>Welcome to Elliot for Water!</div>
        <div>
          These Terms of Use (“Terms”) govern your use of the Elliot for Water website and browser extension (collectively, the “Service”) operated by Elliot for Water Organisation Ltd, registered in
          England and Wales under company number 12428080, with its registered office at International House, 36-38 Cornhill, London, EC3V 3NG.<br /><br />
          By accessing or using our Service, you agree to be bound by these Terms. If you do not agree, please do not use the Service.
        </div>
        <div class="font-bold">1. What We Do</div>
        <div>
          Elliot for Water is a free browser extension that transforms your new tab into a productivity dashboard. It helps you stay focused while passively supporting clean water projects around the
          world.<br />
          We currently offer free productivity tools and widgets. No login or account creation is required to use the service.
        </div>
        <div class="font-bold">2. Who Can Use the Service</div>
        <div>The Service is available to both individual and business users. By using it, you confirm that you are at least 13 years old or have permission from a legal guardian.</div>
        <div class="font-bold">3. Acceptable Use</div>
        <div>
          To maintain a safe and useful environment for everyone, you agree not to:<br />
          Use the Service for unlawful, harmful, or abusive purposes<br />
          Attempt to reverse engineer, duplicate, resell, or exploit the Service<br />
          Interfere with the operation or security of the Service<br />
          We reserve the right to restrict or terminate access if a user is found to be violating these Terms.
        </div>
        <div class="font-bold">4. Your Privacy</div>
        <div>
          We do not collect or store personal data through the Service or website. For information about cookies and external services (if any), please refer to our Privacy Policy and Cookie Policy.
        </div>
        <div class="font-bold">5. Intellectual Property</div>
        <div>
          All content, branding, and functionality in the Elliot for Water extension and website are the property of Elliot for Water Organisation Ltd. You may not copy, modify, or use any part of the
          Service for commercial purposes without written permission.
        </div>
        <div class="font-bold">6. Future Features</div>
        <div>
          We may introduce paid features or subscription tiers in the future (e.g., a Pro version). When that happens, additional terms and conditions (including billing and refund policies) will be
          made available and will form part of these Terms.
        </div>
        <div class="font-bold">7. Changes to These Terms</div>
        <div>We may update these Terms occasionally to reflect changes in the Service or legal requirements. We’ll notify you of significant changes by updating this page with the new date.</div>
        <div class="font-bold">8. Contact Us</div>
        <div>
          If you have any questions about this Terms of Use, please contact:<br />
          info@elliotforwater.com
        </div>
      </div>
    </div>
  </div>
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
