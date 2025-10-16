<script setup lang="ts">
import { ref, watch, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import Button from '../ui/Button.vue'
import AddToChromeButton from '../ui/AddToChromeButton.vue'

// navigation links
const navLinks = [
    { name: 'How it works', to: '#how_it_works' },
    { name: 'Features', to: '#features' },
    { name: 'Faqs', to: '#faq' },
    { name: 'News & Updates', to: '#news_update' },
]

// mobile menu state
const isMenuOpen = ref(false)

// toggle menu
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}

// watch for menu open/close → lock/unlock body scroll
watch(isMenuOpen, (open) => {
    document.body.style.overflow = open ? 'hidden' : ''
})

// ensure cleanup when component unmounts
onUnmounted(() => {
    document.body.style.overflow = ''
})

const scrollToSection = (hash: string) => {
    isMenuOpen.value = false

    if (hash.startsWith('#')) {
        const el = document.querySelector(hash)
        if (el) {
            const offset = 65
            const elementPosition = el.getBoundingClientRect().top + window.scrollY
            const offsetPosition = elementPosition - offset

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            })
        }
    }
}


</script>


<template>
    <nav
        class="app-container flex items-center justify-between gap-2 py-4 bg-background border-b border-neutral-100 shadow-xs sticky top-0 left-0 z-50">
        <!-- Logo -->
        <RouterLink to="/" class="inline-block max-w-24 w-full relative z-50">
            <img src="/logos/app-logo.svg" alt="logo" class="w-full" />
        </RouterLink>

        <!-- Navigation Links -->
        <div :class="[
            'fixed top-0 right-0 h-screen w-full overflow-y-auto lg:w-auto bg-background z-40 lg:z-auto flex flex-col lg:flex-row lg:items-center lg:justify-center gap-3 lg:gap-10 pt-20 pb-10 lg:pb-0 lg:pt-0 px-4 sm:px-8 lg:px-0 transition-transform duration-300',
            isMenuOpen ? 'translate-x-0' : 'translate-x-full',
            'lg:static lg:h-auto lg:bg-transparent lg:translate-x-0',
        ]">
            <!-- Nav Links -->
            <a v-for="(link, i) in navLinks" :key="i" href="javascript:void(0)"
                class="relative px-0.5 after:h-px after:bg-black after:w-0 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 hover:after:w-full after:transition-all after:duration-300"
                @click="scrollToSection(link.to)">
                {{ link.name }}
            </a>
        </div>

        <!-- Right Side Buttons -->
        <div class="flex gap-2 shrink-0 relative z-50">
            <AddToChromeButton />
            <!-- Hamburger (Mobile only) -->
            <Button variant="primary" class="block lg:hidden !rounded-2xl" @click="toggleMenu">
                <span v-if="!isMenuOpen">☰</span>
                <span v-else>✕</span>
            </Button>
        </div>
    </nav>
</template>
