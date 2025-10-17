<script setup lang="ts">
import CardDetails from '@/components/ui/card/CardDetails.vue';
import CardTitle from '@/components/ui/card/CardTitle.vue';
import SectionTitle from '@/components/ui/SectionTitle.vue';

const steps = [
    { id: 1, title: 'Get Things Done. Do Some Good', details: 'As you use our productivity dashboard to stay focused, 20% of what we earn, from our sponsor widget and paid plans, goes directly to clean water projects delivered by our charity partners. You don’t have to do anything extra, your daily work already makes an impact.' },
    { id: 2, title: 'See the Change You’re Creating', details: 'Track your contribution in real time. See how your focus and activity are helping fund clean water, whether you’re working solo or as part of a team.' },
    { id: 3, title: 'Boost Your Impact in Seconds', details: 'Want to help even more? Just click “Boost Your Impact” to donate to our charity partners. With just a small, one-time donation of £4, you can give one person a full year of clean drinking water. It’s quick, flexible, and truly makes a difference.' },
    { id: 4, title: 'Great for Individuals and Companies', details: 'Elliot for Water works for everyone, from remote workers and everyday people to freelancers and large teams. It’s a simple way to add purpose to your workflow, and a meaningful ESG tool for companies looking to do good every day and measure their impact.' },

]
</script>

<template>
    <div class="app-container">
        <SectionTitle>
            <span class="inline-block max-w-[350px] w-full">
                Turn Your <span class="text-primary-300">Focus</span> Into <span class="text-primary-300">Impact</span>
            </span>
        </SectionTitle>

        <!-- divider -->
        <div class="w-full border-dashed border-t border-neutral-200 my-6 sm:my-8 lg:my-10"></div>

        <div class="flex items-start flex-col-reverse md:flex-row gap-5 justify-between">
            <div class="max-w-[650px] w-full pt-6">
                <div v-for="(step, index) in steps" class="flex gap-4">
                    <div class="shrink-0">
                        <div
                            class="border-primary-200 border-2 bg-primary-400 text-white relative z-10
                            text-sm md:text-base
                            rounded-full font-semibold size-7 md:size-9 inline-flex items-center justify-center
                            after:inset-0 after:absolute after:bg-[linear-gradient(to_bottom,rgba(255,255,255,0.24)_0%,rgba(255,255,255,0)_100%)]">
                            {{ step.id }}
                        </div>

                        <!-- side border -->
                        <div v-if="index !== steps.length - 1"
                            class="h-full w-px border-dashed border-l border-neutral-200 mx-auto -translate-y-7 md:-translate-y-9">
                        </div>

                    </div>
                    <div class="space-y-2 max-w-[588px] w-full pb-10">
                        <CardTitle variant="big">
                            {{ step.title }}
                        </CardTitle>
                        <CardDetails>
                            {{ step.details }}
                        </CardDetails>
                    </div>
                </div>
                <div class="w-full border-dashed border-t border-neutral-200 mt-6 sm:mt-8 lg:mt-10"></div>
            </div>
            <div class="max-w-[300px] md:max-w-[350px] lg:max-w-[507px] w-full mx-auto lg:mx-0">
                <img src="/images/glass.webp" alt="glass" class="w-full">
            </div>
        </div>
    </div>
</template>