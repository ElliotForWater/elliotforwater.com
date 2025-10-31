<script setup lang="ts">
import Button from '@/components/ui/Button.vue';
import { Vue3Marquee } from 'vue3-marquee';

const companies = [
    { icon: '/logos/trusted-company/1.svg' },
    { icon: '/logos/trusted-company/2.svg' },
    { icon: '/logos/trusted-company/3.svg' },
    { icon: '/logos/trusted-company/4.svg' },
    { icon: '/logos/trusted-company/5.svg' },
    { icon: '/logos/trusted-company/6.svg' },
    { icon: '/logos/trusted-company/7.svg' },
    { icon: '/logos/trusted-company/8.svg' },
    { icon: '/logos/trusted-company/9.svg' },
    { icon: '/logos/trusted-company/1.svg' },
    { icon: '/logos/trusted-company/2.svg' },
    { icon: '/logos/trusted-company/3.svg' },
    { icon: '/logos/trusted-company/4.svg' },
    { icon: '/logos/trusted-company/5.svg' },
    { icon: '/logos/trusted-company/6.svg' },
    { icon: '/logos/trusted-company/7.svg' },
    { icon: '/logos/trusted-company/8.svg' },
    { icon: '/logos/trusted-company/9.svg' },
    { icon: '/logos/trusted-company/1.svg' },
    { icon: '/logos/trusted-company/2.svg' },
    { icon: '/logos/trusted-company/3.svg' },
    { icon: '/logos/trusted-company/4.svg' },
    { icon: '/logos/trusted-company/5.svg' },
    { icon: '/logos/trusted-company/6.svg' },
    { icon: '/logos/trusted-company/7.svg' },
    { icon: '/logos/trusted-company/8.svg' },
    { icon: '/logos/trusted-company/9.svg' },
]


</script>

<template>
    <div class="app-container">
        <div class="space-y-6 md:space-y-10 lg:space-y-15">
            <!-- banner area -->
            <div class="border-2 border-neutral-100 rounded-3xl overflow-hidden p-4 sm:p-8 lg:p-12
                    bg-[linear-gradient(to_right,rgb(235,240,255)_0%,rgb(252,253,255)_46%,rgb(255,238,173)_100%)]
                    flex flex-col md:flex-row items-center gap-5 justify-between">

                <div
                    class="max-w-[743px] w-full text-text-heading font-semibold text-[20px] sm:text-[30px] lg:text-[40px] leading-[1.2]">
                    Join our free Business pilot program and be part of the change
                </div>

                <Button variant="primary" class="shrink-0" target="_blank" href="https://form.jotform.com/252945447848069">
                    Get in touch
                </Button>
            </div>

            <!-- marquee logos -->
            <div class="w-full space-y-2 md:space-y-4">
                <div class="w-full font-medium text-neutral-700 text-sm">Already trusted by</div>
                <div class="relative">
                    <Vue3Marquee :duration="60">
                        <div v-for="(company, index) in companies" :key="index" class="mx-8 flex items-center">
                            <img :src="company.icon" alt="Trusted Company Logo"
                                class="object-contain opacity-80 hover:opacity-100 transition-all duration-300" />
                        </div>
                    </Vue3Marquee>
                    <!-- overlay start -->
                    <div
                        class="absolute w-full h-full top-0 left-0 z-10
                        bg-[linear-gradient(to_right,rgba(255,255,255,1)_0%_,_rgba(255,255,255,0)_5%_,_rgba(255,255,255,0)_95%_,_rgba(255,255,255,1)_100%)]">
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
