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
      <div class="text-center mt-10"><h3 class="font-bold text-16">Cookie Policy</h3></div>
      <div class="policy-content text-16">
        <div>At Elliot for Water, your privacy matters to us. We do not use cookies or any other tracking technologies on our website or browser extension.</div>
        <div class="font-bold">1. What Are Cookies?</div>
        <div>Cookies are small text files stored on your device when you visit a website. They are commonly used to improve functionality, remember preferences, or track user behavior.</div>
        <div class="font-bold">2. Our Cookie Usage</div>
        <div>
          We do <b>not</b> use:<br />
          Essential cookies<br />
          Analytics or performance cookies<br />
          Advertising or marketing cookies<br />
        </div>
        <div class="font-bold">3. Third-Party Services</div>
        <div>
          Our browser extension and website currently do not integrate with third-party services that use cookies.<br />
          If this changes in the future, we will update this policy accordingly and request your consent when required.
        </div>
        <div class="font-bold">4. Contact Us</div>
        <div>
          If you have any questions about this Cookie Policy, please contact:<br />
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
