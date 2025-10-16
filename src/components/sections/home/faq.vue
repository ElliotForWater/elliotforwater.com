<script setup lang="ts">
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Button from '@/components/ui/Button.vue';
import CardDetails from '@/components/ui/card/CardDetails.vue';
import SectionTitle from '@/components/ui/SectionTitle.vue';
import WhiteButtonBg from '@/components/ui/white-button-bg.vue';

const defaultValue = "item-1"

const accordionItems = [
    { value: "item-1", title: "How does Elliot for Water help donate clean water?", content: "When you use Eliot for Water, you help generate revenue through our sponsor widget and optional subscriptions. We donate 20% of that revenue to clean water projects, carried out by our partners. Just by staying productive. You're helping make a difference." },
    { value: "item-2", title: "Is Elliot for Water free to use?", content: "Yes. It's unstyled by default, giving you freedom over the look and feel." },
    { value: "item-3", title: "Can I do more to help?", content: "Yes! You can use the transition prop to configure the animation." },
    { value: "item-4", title: "What features are included?", content: "Yes! You can use the transition prop to configure the animation." },
    { value: "item-5", title: "What’s included in the Pro version?", content: "Yes! You can use the transition prop to configure the animation." },
    { value: "item-6", title: "Can I use Elliot for Water with my team or company?", content: "Yes! You can use the transition prop to configure the animation." },
    { value: "item-7", title: "How do clean water donations actually work?", content: "Yes! You can use the transition prop to configure the animation." },
    { value: "item-8", title: "Can I choose where my impact goes?", content: "Yes! You can use the transition prop to configure the animation." },
    { value: "item-9", title: "Does Elliot for Water collect my data?", content: "Yes! You can use the transition prop to configure the animation." },
    { value: "item-10", title: "What browsers does it work on?", content: "Yes! You can use the transition prop to configure the animation." },
]

</script>

<template>
    <div class="app-container">
        <div class="max-w-[665px] w-full mx-auto space-y-6 md:space-y-8 lg:space-y-14">
            <div class="w-full">
                <div class="text-center pb-2 md:pb-4">
                    <WhiteButtonBg>
                        <Button variant="quaternary" class="!px-8 !py-2">
                            FAQ
                        </Button>
                    </WhiteButtonBg>
                </div>

                <div class="w-full space-y-4">
                    <SectionTitle>
                        <span class="text-center inline-block w-full">
                            Got Questions? <br />
                            We’ve Got <span class="text-primary-300">Answers</span>
                        </span>
                    </SectionTitle>
                    <CardDetails>
                        <span class="text-center inline-block w-full">
                            Learn how Elliot for Water turns your productivity into clean water, what features you
                            get,
                            and
                            how
                            to do even more.
                        </span>
                    </CardDetails>
                </div>
            </div>

            <div class="w-full">
                <Accordion type="single" class="w-full" collapsible :default-value="defaultValue">
                    <AccordionItem class="bg-white px-4 mb-2 rounded-[8px] overflow-hidden"
                        v-for="item in accordionItems" :key="item.value" :value="item.value">
                        <AccordionTrigger>{{ item.title }}</AccordionTrigger>
                        <AccordionContent>
                            {{ item.content }}
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>

        </div>
    </div>
</template>