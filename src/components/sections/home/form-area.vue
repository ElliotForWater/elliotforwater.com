<script setup lang="ts">
import Button from '@/components/ui/Button.vue';

</script>

<template>
    <div class="w-full bg-neutral-900">
        <div class="app-container py-15 md:py-20 lg:py-[105px] space-y-6 lg:space-y-10">
            <div class="w-full space-y-5">
                <h3
                    class="text-white font-semibold text-[25px] md:text-[35px] lg:text-[48px] leading-[1.2] text-center">
                    Stay <span
                        class="p-0.5 bg-white/20 rotate-2 text-[23px] md:text-[33px] lg:text-[40px] inline-flex items-center justify-center rounded-[12px]"><span
                            class="bg-primary-500 px-3 py-1 rounded-[12px] inline-block w-full">
                            <span class="inline-block w-[28px] md:w-[38px] lg:w-[46px]">
                                <img src="/icons/handshake-icon.svg" alt="icon" class="inline w-full">
                            </span>
                            <span>
                                connected
                            </span>
                        </span>
                    </span>
                    and
                    <span
                        class="p-0.5 bg-white/20 -rotate-2 text-[23px] md:text-[33px] lg:text-[40px] inline-flex items-center justify-center rounded-[12px]"><span
                            class="bg-primary-500 px-3 py-1 rounded-[12px] inline-block w-full">
                            <span class="inline-block w-[28px] md:w-[38px] lg:w-[46px]">
                                <img src="/icons/star-icon.svg" alt="icon" class="inline w-full">
                            </span>
                            <span>
                                inspired
                            </span>
                        </span>
                    </span>
                </h3>

                <div class="text-lg sm:text-xl md:text-2xl text-center text-white max-w-[760px] mx-auto">
                    Subscribe to our newsletter for updates on your impact, new features, clean water milestones,
                    and simple tips to help you stay focused.
                </div>
            </div>

            <div class="max-w-[455px] w-full mx-auto space-y-3">
                <form action=""
                    class="w-full bg-white rounded-full p-1 md:p-2 overflow-hidden flex items-center gap-2 justify-between">
                    <input type="email"
                        class="bg-white text-text-body placeholder:text-text-body px-3 md:px-6 py-2 lg:py-3 outline-none text-base lg:text-lg w-full"
                        placeholder="Email address">

                    <div class="shrink-0">
                        <Button variant="primary" type="submit">Subscribe</Button>
                    </div>
                </form>
                <div class="text-white text-center text-sm">
                    By submitting this form, you agree to our <RouterLink to="#"
                        class="text-secondary-400 transition-all duration-300 hover:underline">Privacy
                        Policy</RouterLink>, and consent to receiving marketing
                    communications from us.
                </div>
            </div>
        </div>
    </div>
</template>