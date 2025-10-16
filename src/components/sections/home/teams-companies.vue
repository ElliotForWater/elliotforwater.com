<script setup lang="ts">
import Button from '@/components/ui/Button.vue';
import CardDetails from '@/components/ui/card/CardDetails.vue';
import CardTitle from '@/components/ui/card/CardTitle.vue';
import SectionTitle from '@/components/ui/SectionTitle.vue';
import WhiteButtonBg from '@/components/ui/white-button-bg.vue';

const steps = [
    { id: 1, icon: '/icons/track-icon.svg', title: 'Track Your Team’s Impact in Real Time', details: 'Visualise how your team’s daily focus contributes to clean water projects with live, transparent metrics.' },
    { id: 2, icon: '/icons/boost-icon.svg', title: 'Boost Focus with Seamless Productivity Tools', details: 'Enhance your team’s workflow with built-in productivity features and integrations: no extra steps, just added purpose.' },
    { id: 3, icon: '/icons/esg-dashboard-icon.svg', title: 'ESG Dashboards and Reporting', details: 'Access ready-to-share ESG reports and dashboards to showcase your company’s social impact effortlessly.' },
    { id: 4, icon: '/icons/works-within-icon.svg', title: 'Works Within Your Existing Workflow', details: 'Elliot for Water integrates smoothly with the tools your team already uses, from Google Workspace to Trello, Slack, and more.' },

]
</script>

<template>
    <div class="app-container">

        <div class="w-full text-center pb-2 md:pb-4">
            <WhiteButtonBg>
                <Button variant="quaternary" class="!py-2">
                    Business
                </Button>
            </WhiteButtonBg>
        </div>

        <div class="space-y-6 md:space-y-10 lg:space-y-16">
            <div class="max-w-[630px] mx-auto space-y-4">
                <SectionTitle>
                    <span class="inline-block w-full text-center">
                        For <span class="text-primary-300">Teams</span> and <span
                            class="text-primary-300">Companies</span>
                    </span>
                </SectionTitle>
                <CardDetails>
                    <span class="inline-block text-center">
                        Align daily work with real-world impact. Elliot for Water helps your team stay productive while
                        supporting ESG goals effortlessly
                    </span>
                </CardDetails>
            </div>


            <div class="grid grid-cols-1 lg:grid-cols-2 max-w-[1091px] mx-auto">
                <div v-for="(step, index) in steps" class="flex gap-4">
                    <div class="shrink-0">
                        <div class="size-8 md:size-10 flex items-center justify-center">
                            <img :src="step.icon" alt="icon">
                        </div>
                    </div>
                    <div class="space-y-2 max-w-[588px] w-full pb-10">
                        <CardTitle variant="small">
                            {{ step.title }}
                        </CardTitle>
                        <CardDetails>
                            {{ step.details }}
                        </CardDetails>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>