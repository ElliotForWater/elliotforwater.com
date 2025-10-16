<script setup lang="ts">
import AddToChromeButton from '@/components/ui/AddToChromeButton.vue';

</script>

<template>
    <div class="w-full relative">
        <div class="w-full max-w-[1600px] mx-auto h-[400px] md:h-[600px] lg:h-[800px] overflow-hidden">
            <img src="/public/images/join-banner.webp" alt="banner" class="w-full h-full object-cover" />
        </div>
        <div class="absolute top-0 left-0 w-full h-full app-container flex items-center">
            <div class="md:max-w-[430px] w-full ml-auto flex flex-col items-center gap-10">
                <div class="font-bold text-white text-[45px] lg:text-[56px] leading-[1.2] text-center uppercase">
                    Join our growing community
                </div>
                <div class="relative">
                    <AddToChromeButton />
                    <div
                        class="max-w-[70px] md:max-w-[100px] lg:max-w-[172px] w-full translate-x-[80%] sm:translate-x-[45%] translate-y-[2%]">
                        <img src="/icons/free-icon-2.svg" alt="free-icon">
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>