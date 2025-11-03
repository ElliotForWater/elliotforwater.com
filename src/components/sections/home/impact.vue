<script setup lang="ts">
import AddToChromeButton from '@/components/ui/AddToChromeButton.vue';
import AddToFirefoxButton from '@/components/ui/AddToFirefoxButton.vue';
import CardDetails from '@/components/ui/card/CardDetails.vue';
import SectionTitle from '@/components/ui/SectionTitle.vue';

let userAgent = navigator.userAgent;
// let isChrome = userAgent.includes('Chrome') && !userAgent.includes('OPR');
let isFirefox = userAgent.includes('Firefox');
</script>

<template>
  <div class="app-container">
    <div class="max-w-[702px] mx-auto w-full">
      <div class="max-w-[234px] w-full mx-auto">
        <div class="w-full ml-8">
          <img src="/logos/workflow-logo.svg" alt="logo" class="w-full" />
        </div>
      </div>
      <div class="w-full space-y-3">
        <SectionTitle>
          <span class="text-center inline-block w-full"> Turn your <span class="text-primary-400">workflow</span> into <span class="text-primary-400">impact</span> </span>
        </SectionTitle>
        <CardDetails>
          <span class="w-full text-center inline-block"> Boost your productivity and support clean water projects! Join Elliot for Water and turn your daily routine into global impact. </span>
        </CardDetails>
      </div>
      <div class="flex flex-col items-center gap-6 pt-6">
        <AddToChromeButton v-if="!isFirefox" />
        <AddToFirefoxButton v-if="isFirefox" />
        <div class="flex items-center flex-wrap gap-2 md:gap-4 px-[2%]">
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
