<script setup lang="ts">
import Faq from '@/components/sections/home/faq.vue';
import Features from '@/components/sections/home/features.vue';
import FocusImpact from '@/components/sections/home/focus-impact.vue';
import FormArea from '@/components/sections/home/form-area.vue';
import Hero from '@/components/sections/home/hero.vue';
import Impact from '@/components/sections/home/impact.vue';
import JoinBanner from '@/components/sections/home/join-banner.vue';
import JoinBusiness from '@/components/sections/home/join-business.vue';
import NewsUpdate from '@/components/sections/home/news-update.vue';
import TeamsCompanies from '@/components/sections/home/teams-companies.vue';
import Footer from '@/components/common/Footer.vue';
import Navbar from '@/components/common/Navbar.vue';
</script>

<template>
  <Navbar />
  <div class="w-full">
    <Hero />
  </div>
  <div id="how_it_works" class="w-full pt-5 md:pt-20 lg:pt-32">
    <FocusImpact />
  </div>
  <div class="w-full pt-5 md:pt-20 lg:pt-32">
    <TeamsCompanies />
  </div>
  <div class="pt-4 md:pt-6 lg:pt-10">
    <JoinBusiness />
  </div>
  <div id="features" class="w-full pt-5 md:pt-20 lg:pt-32">
    <Features />
  </div>
  <div class="w-full pt-5 md:pt-20 lg:pt-32">
    <JoinBanner />
  </div>
  <div id="faq" class="w-full py-5 md:py-20 lg:py-32 bg-[linear-gradient(to_bottom,rgb(235,240,255)_0%,rgb(252,253,255)_100%)]">
    <Faq />
  </div>
  <div class="w-full">
    <FormArea />
  </div>
  <div id="news_update" class="w-full py-5 md:py-20 lg:py-32">
    <NewsUpdate />
  </div>
  <div class="w-full pt-7 pb-5 md:pb-20 lg:pb-32 bg-[linear-gradient(to_bottom,rgb(235,240,255)_0%,rgb(252,253,255)_100%)]">
    <Impact />
  </div>
  <Footer />
</template>
