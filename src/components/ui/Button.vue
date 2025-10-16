<script setup lang="ts">
import { computed, defineProps } from 'vue'
import { RouterLink } from 'vue-router'

type Variant = 'primary' | 'secondary' | 'tertiary' | 'quaternary'

const props = defineProps<{
    variant?: Variant
    to?: string
    type?: 'button' | 'submit' | 'reset'
    class?: string
    disabled?: boolean
}>()

const variantClass = computed(() => {
    switch (props.variant) {
        case 'secondary':
            return 'border-primary-800 bg-primary-900 text-white'
        case 'tertiary':
            return 'border-secondary-200 bg-secondary-400 text-text-heading'
        case 'quaternary':
            return 'border-neutral-100 bg-white text-text-heading'
        default:
            // primary (default)
            return 'border-primary-200 bg-primary-400 text-white'
    }
})

// base design (common for all buttons)
const baseClass = computed(
    () =>
        `cursor-pointer inline-flex items-center border-2 justify-center gap-2 px-3 lg:px-5 py-2 lg:py-3 rounded-full relative overflow-hidden font-medium transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed after:inset-0 after:absolute after:bg-[linear-gradient(to_bottom,rgba(255,255,255,0.35)_0%,rgba(255,255,255,0)_100%)] after:transition-all after:duration-300 hover:after:opacity-0 ${variantClass.value} ${props.class || ''}`
)
</script>

<template>
    <!-- If "to" prop exists => render as router-link -->
    <RouterLink v-if="to" :to="to" :class="baseClass">
        <slot />
    </RouterLink>

    <!-- Otherwise render as regular button -->
    <button v-else :type="type || 'button'" :disabled="disabled" :class="baseClass">
        <slot />
    </button>
</template>
