<script setup lang="ts">
import { RouterLink } from 'vue-router'

// navigation links
const navLinks = [
  { name: 'Terms', to: '/terms' },
  { name: 'Privacy Policy', to: '/privacy' },
  { name: 'Cookie Policy', to: '/cookie' },
  // { name: 'Team', to: '/' },
  { name: 'Contact', to: 'mailto:info@elliotforwater.com?subject=Website%20Contact' },
]

const socialIcons = [
  { id: '1', icon: '/icons/social-icon/linkedin-icon.svg', url: 'https://www.linkedin.com/company/elliot-for-water/' },
  { id: '2', icon: '/icons/social-icon/youtube-icon.svg', url: 'https://www.youtube.com/@elliotforwater' },
  { id: '3', icon: '/icons/social-icon/facebook-icon.svg', url: 'https://www.facebook.com/elliotforwater/' },
  { id: '4', icon: '/icons/social-icon/instagram-icon.svg', url: 'https://www.instagram.com/elliotforwater/' },
  { id: '5', icon: '/icons/social-icon/x-icon.svg', url: 'https://x.com/elliotforwater' },
]
</script>

<template>
  <div class="app-container py-7 flex flex-col lg:flex-row items-center gap-5 justify-between">
    <div class="flex flex-col md:flex-row items-center gap-5 xl:gap-10">
      <RouterLink to="/" class="inline-block max-w-20 w-full">
        <img src="/logos/app-logo.svg" alt="logo" class="w-full" />
      </RouterLink>

      <span class="inline-block text-sm text-text-body whitespace-nowrap">
        © 2025 Elliot for Water Organisation LTD.
      </span>

      <span class="inline-block whitespace-nowrap" v-for="link in navLinks">
        <a
          v-if="link.to.startsWith('mailto:')"
          :href="link.to"
          class="inline-block text-sm text-text-body transition-all duration-300 hover:underline"
        >
          {{ link.name }}
        </a>
        <RouterLink
          v-else
          :to="link.to"
          class="inline-block text-sm text-text-body transition-all duration-300 hover:underline"
        >
          {{ link.name }}
        </RouterLink>
      </span>
    </div>
    <div class="flex items-center gap-5 xl:gap-10">
      <div v-for="icon in socialIcons">
        <a target="_blank" :href="icon.url" class="inline-block transition-all duration-300 hover:scale-125">
          <img :src="icon.icon" alt="icon" />
        </a>
      </div>
    </div>
  </div>
</template>
