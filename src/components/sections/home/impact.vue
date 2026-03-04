<script setup lang="ts">
import AddToBrowserCTA from '@/components/common/AddToBrowserCTA.vue';
import CardDetails from '@/components/ui/card/CardDetails.vue';
import SectionTitle from '@/components/ui/SectionTitle.vue';
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
        <AddToBrowserCTA :showFreeBadge="false" ctaLink="https://magic.beehiiv.com/v1/e9406cdd-094c-4ff2-a866-49b0aa2dd605" label="Send me the link">
          <template #mobileHint>
            <div class="text-text-body text-sm md:text-base font-medium text-center pb-1 mb-2">
              Elliot for Water is only available on desktop, leave your email, and we’ll send you the download link.
            </div>
          </template>
        </AddToBrowserCTA>
      </div>
    </div>
  </div>
</template>
