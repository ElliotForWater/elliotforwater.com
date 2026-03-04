<script setup lang="ts">
import Button from '@/components/ui/Button.vue';
import AddToBrowserCTA from '@/components/common/AddToBrowserCTA.vue';
</script>

<template>
  <div class="min-h-screen relative bg-[linear-gradient(to_bottom,rgb(235,240,255)_0%,rgb(252,253,255)_100%)]">
    <div class="absolute h-full w-full flex items-end justify-between pb-[28%] sm:pb-[17%]">
      <div class="w-[48%]">
        <img src="/images/water-flow.webp" alt="water" class="w-full" />
      </div>

      <div class="w-[18%]">
        <img src="/images/half-circle.webp" alt="water" class="w-full" />
      </div>
    </div>

    <div class="app-container relative z-20">
      <div class="py-5 sm:py-10 lg:py-16 space-y-4 md:space-y-6 lg:space-y-8 max-w-[800px] w-full mx-auto">
        <h1 class="font-medium text-center text-[40px] sm:text-[60px] md:text-[84px] leading-[1] text-text-heading">
          Stay <span class="text-primary-300">Focused</span> and Support
          <span class="text-primary-300"> Clean Water </span>
        </h1>

        <p class="text-text-body text-base lg:text-xl text-center">
          Elliot for Water is a free productivity dashboard that helps you stay focused while supporting clean water projects around the world.
        </p>

        <AddToBrowserCTA ctaLink="https://magic.beehiiv.com/v1/e9406cdd-094c-4ff2-a866-49b0aa2dd605" label="Send me the link">
          <template #mobileHint>
            <div class="text-base text-center text-text-body pb-1 mb-2">Elliot for Water is only available on desktop, leave your email, and we’ll send you the download link.</div>
          </template>

          <template #secondCta>
            <Button variant="primary" class="text-sm sm:text-base" href="#how_it_works">Discover more</Button>
          </template>
        </AddToBrowserCTA>
      </div>

      <div class="w-full">
        <img src="/images/hero.webp" alt="hero-img" class="w-full" />

        <div class="flex items-center flex-wrap gap-2 md:gap-4 py-4 px-[2%]">
          <p class="uppercase text-neutral-400 text-xs md:text-sm">Available for Chrome & Firefox</p>
          <div class="flex items-center gap-2 md:gap-3">
            <img src="/logos/chrome-logo.svg" alt="chrome-icon" class="size-4 sm:size-5" />
            <img src="/logos/firefox-logo.svg" alt="chrome-icon" class="size-4 sm:size-5" />
            <!-- <img src="/logos/edge-logo.svg" alt="chrome-icon" class="size-4 sm:size-5" /> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
