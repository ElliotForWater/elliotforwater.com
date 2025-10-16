<script setup lang="ts">
import { computed, defineProps } from 'vue'

type Variant = 'big' | 'small'

const props = defineProps<{
    variant?: Variant
}>()

const variantClass = computed(() => {
    switch (props.variant) {
        case 'big':
            return 'text-lg sm:text-xl md:text-2xl'
        default:
            // small (default)
            return 'text-base sm:text-lg md:text-xl'
    }
})
</script>

<template>
    <div class="text-primary-900 font-medium" :class="variantClass">
        <slot />
    </div>
</template>
