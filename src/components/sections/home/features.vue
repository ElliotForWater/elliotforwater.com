<script setup lang="ts">
import Button from '@/components/ui/Button.vue';
import CardDetails from '@/components/ui/card/CardDetails.vue';
import CardTitle from '@/components/ui/card/CardTitle.vue';
import SectionTitle from '@/components/ui/SectionTitle.vue';
import WhiteButtonBg from '@/components/ui/white-button-bg.vue';

</script>

<template>
    <div class="app-container">

        <div class="w-full text-center pb-2 md:pb-4">
            <WhiteButtonBg>
                <Button variant="quaternary" class="!py-2">
                    Features
                </Button>
            </WhiteButtonBg>
        </div>

        <div class="space-y-10 md:space-y-15 lg:space-y-20">
            <div class="max-w-[630px] mx-auto space-y-4">
                <SectionTitle>
                    <span class="inline-block w-full text-center">
                        Turn your browser into a <span class="text-primary-300">productivity tool</span> for <span
                            class="text-primary-300">good</span>
                    </span>
                </SectionTitle>
            </div>

            <!-- card area -->
            <div class="space-y-4">
                <div class="bg-neutral-50 border-1 border-neutral-100 rounded-4xl overflow-hidden pl-4 md:pl-6 lg:pl-8 pr-6 md:pr-10 lg:pr-16
                        flex flex-col md:flex-row md:gap-10 justify-between">
                    <div class="py-4 md:py-6 lg:py-8 space-y-4 md:space-y-6 lg:space-y-8 max-w-[503px] w-full">
                        <div class="w-full flex items-center gap-2">
                            <div class="inline-block w-4 md:w-6">
                                <img src="/icons/todos-icon.svg" alt="icon" class="w-full">
                            </div>
                            <span class="font-medium text-primary-300 text-sm md:text-base">
                                TODOs
                            </span>
                        </div>

                        <div class="w-full space-y-2 md:space-y-4">
                            <CardTitle variant="big">
                                Stay on top of your tasks
                            </CardTitle>
                            <CardDetails>
                                Keep track of your to-dos with a clean, easy-to-use list right from your browser. Stay
                                focused, plan your day, and boost your productivity without switching tabs.
                            </CardDetails>
                        </div>
                    </div>

                    <div class="max-w-[429px] w-full mx-auto md:mx-0">
                        <img src="/images/todos-img.webp" alt="img" class="w-full h-full object-cover">
                    </div>
                </div>

                <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4">
                    <div class="col-span-2 bg-neutral-50 border-1 border-neutral-100 rounded-4xl overflow-hidden px-4 md:px-6 lg:px-8 
                        flex flex-col gap-5 md:gap-10 justify-between max-h-[500px] md:max-h-[580px]
                    ">
                        <div class="py-4 md:py-6 lg:py-8 space-y-4 md:space-y-6 lg:space-y-8 max-w-[503px] w-full">
                            <div class="w-full flex items-center gap-2">

                                <div class="inline-block w-4 md:w-6">
                                    <img src="/icons/links-icon.svg" alt="icon" class="w-full">
                                </div>

                                <span class="font-medium text-primary-300 text-sm md:text-base">
                                    Links
                                </span>
                            </div>

                            <div class="w-full space-y-2 md:space-y-4">
                                <CardTitle variant="big">
                                    Your favourite websites at your fingertips
                                </CardTitle>
                                <CardDetails>
                                    Access your favourite websites in one click. Save time with customizable shortcuts
                                    to your most-used tools, apps, and pages.
                                </CardDetails>
                            </div>
                        </div>

                        <div class="w-full">
                            <img src="/images/link-img.webp" alt="img" class="w-full h-full object-cover">
                        </div>
                    </div>

                    <div class="col-span-2 lg:col-span-3 space-y-4">
                        <div
                            class="w-full bg-neutral-50 border-1 border-neutral-100 rounded-4xl overflow-hidden px-4 md:px-6 lg:px-8 py-4 md:py-6 lg:py-12 relative">
                            <div class="space-y-4 md:space-y-6 lg:space-y-8 max-w-[503px] w-full relative z-10">
                                <div class="w-full flex items-center gap-2">

                                    <div class="inline-block w-3 md:w-5">
                                        <img src="/icons/focus-icon.svg" alt="icon" class="w-full">
                                    </div>


                                    <span class="font-medium text-primary-300 text-sm md:text-base">
                                        Focus of the day
                                    </span>
                                </div>

                                <div class="w-full space-y-2 md:space-y-4 max-w-[350px]">
                                    <CardTitle variant="big">
                                        Focus of the day
                                    </CardTitle>
                                    <CardDetails>
                                        Set your main goal for the day and see it every time you open your browser. Stay
                                        on track and get the right things done.
                                    </CardDetails>
                                </div>
                            </div>

                            <div class="w-full h-full max-w-[215px] ml-auto absolute top-0 right-0 ">
                                <img src="/images/focus-img.webp" alt="img" class="w-full h-full object-cover">
                            </div>
                        </div>

                        <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div
                                class="w-full bg-neutral-50 border-1 border-neutral-100 rounded-4xl overflow-hidden px-4 md:px-6 lg:px-8 py-4 md:py-6 lg:py-8 relative">
                                <div class="space-y-4 md:space-y-6 lg:space-y-8 max-w-[503px] w-full">
                                    <div class="w-full flex items-center gap-5 justify-between">
                                        <div class="flex items-center gap-2">
                                            <div class="inline-block w-3 md:w-5">
                                                <img src="/icons/clock-icon.svg" alt="icon" class="w-full">
                                            </div>

                                            <span class="font-medium text-primary-300 text-sm md:text-base">
                                                Clock
                                            </span>
                                        </div>

                                        <div class="flex items-center gap-2">
                                            <div class="inline-block">
                                                <img src="/icons/cloud-icon.svg" alt="icon" class="w-full"></img>
                                            </div>
                                            <div class="inline-block">
                                                <img src="/icons/sun-icon.svg" alt="icon" class="w-full"></img>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="w-full space-y-2 md:space-y-4 max-w-[350px]">
                                        <CardTitle variant="big">
                                            Time, weather and more
                                        </CardTitle>
                                        <CardDetails>
                                            Check the weather, local time, and more right from your dashboard.
                                        </CardDetails>
                                    </div>
                                </div>
                            </div>

                            <div
                                class="w-full bg-primary-400 border-1 border-neutral-100 rounded-4xl overflow-hidden px-4 md:px-6 lg:px-8 py-4 md:py-6 lg:py-9 relative">
                                <div class="flex flex-col items-center gap-4">
                                    <div class="size-20">
                                        <img src="/icons/get-more-icon.svg" alt="icon" class="w-full">
                                    </div>
                                    <CardTitle>
                                        <span class="text-white">
                                            Get more with Pro
                                        </span>
                                    </CardTitle>
                                    <Button variant="tertiary">
                                        <span class="relative z-10">
                                            Join the waitlist
                                        </span>
                                    </Button>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>


        </div>

    </div>
</template>