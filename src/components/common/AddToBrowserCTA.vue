<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';
import AddToChromeButton from '@/components/ui/AddToChromeButton.vue';
import AddToFirefoxButton from '@/components/ui/AddToFirefoxButton.vue';
import Button from '@/components/ui/Button.vue';

const props = withDefaults(
  defineProps<{
    showFreeBadge?: boolean;
    userAgent?: string; // for testing if true, show AddTo button even on mobile/tablet */
    ctaLink: string;
    label: string;
  }>(),
  {
    showFreeBadge: true,
    userAgent: undefined,
  },
);

const userAgent = computed(() => (props.userAgent ?? navigator.userAgent).toLowerCase());
const isFirefox = computed(() => userAgent.value.includes('firefox'));
const isMobileOrTablet = ref(false);

onMounted(() => {
  const hasTouch = navigator.maxTouchPoints > 0 || 'ontouchstart' in window;
  const isMobileUserAgent = /android|iphone|ipad|ipod|mobile|tablet/.test(userAgent.value);
  isMobileOrTablet.value = hasTouch && isMobileUserAgent;
});

const submit = (event?: Event) => {
  event?.preventDefault();
  const params = new URLSearchParams({
    redirect_to: 'https://elliotforwater.com/',
  });

  window.open(`${props.ctaLink}?${params.toString()}`, '_blank');
};
</script>

<template>
  <!-- Mobile/Tablet -->
  <div v-if="isMobileOrTablet" class="w-full">
    <slot name="mobileHint" />
    <div class="flex justify-center pt-1 mt-2">
      <Button variant="secondary" class="text-sm sm:text-base" @click="submit">
        {{ props.label }}
      </Button>
    </div>
    <div class="flex justify-center pt-1 mt-2">
      <slot name="secondCta" />
    </div>
  </div>

  <!-- Desktop View -->
  <div v-else class="flex items-start gap-2 md:gap-6 justify-center">
    <div class="relative">
      <AddToChromeButton v-if="!isFirefox" />
      <AddToFirefoxButton v-else />

      <div v-if="showFreeBadge" class="max-w-[70px] md:max-w-[100px] lg:max-w-[172px] w-full -translate-x-[40%] sm:-translate-x-[98%] sm:-translate-y-[2%]">
        <img src="/icons/free-icon.svg" alt="free-icon" />
      </div>
    </div>
    <slot name="secondCta" />
  </div>
</template>
