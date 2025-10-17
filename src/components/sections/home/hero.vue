<script setup lang="ts">
import AddToChromeButton from '@/components/ui/AddToChromeButton.vue';
import Button from '@/components/ui/Button.vue';
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

        <div class="flex items-start gap-2 md:gap-6 justify-center">
          <div class="relative">
            <AddToChromeButton />
            <div class="max-w-[70px] md:max-w-[100px] lg:max-w-[172px] w-full -translate-x-[40%] sm:-translate-x-[98%] sm:-translate-y-[2%]">
              <img src="/icons/free-icon.svg" alt="free-icon" />
            </div>
          </div>
          <Button variant="primary"> Discover more </Button>
        </div>
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
