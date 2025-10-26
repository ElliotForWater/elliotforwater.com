<script setup lang="ts">
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Button from '@/components/ui/Button.vue';
import CardDetails from '@/components/ui/card/CardDetails.vue';
import SectionTitle from '@/components/ui/SectionTitle.vue';
import WhiteButtonBg from '@/components/ui/white-button-bg.vue';

const defaultValue = 'item-1';

const accordionItems = [
  {
    value: 'item-1',
    title: 'How does Elliot for Water help donate clean water?',
    content:
      'When you use Elliot for Water, you help generate revenue through our sponsor widget and optional subscriptions. We use 20% of that revenue to support clean water projects carried out by our charity partners. Just by staying productive, you’re helping make a difference.',
  },
  {
    value: 'item-2',
    title: 'Is Elliot for Water free to use?',
    content:
      'Yes! Elliot for Water is completely free. You can use all the core features without paying.<br/><br/>A Pro version with advanced tools to boost your productivity and impact, and a Business version for teams and companies who want to increase and measure their ESG impact, are on the way. Sign up for the Pro waitlist or connect with us to join our free Business Pilot Program.',
  },
  {
    value: 'item-3',
    title: 'Can I do more to help?',
    content: 'Yes! You can make a one-time or recurring donation through the “Boost Your Impact” button. Just £4 gives one person a full year of clean drinking water.',
  },
  {
    value: 'item-4',
    title: 'What features are included?',
    content:
      'The free version includes:<br/><br/><ul><li>To-do list</li><li>Quick links</li><li>Focus of the day</li><li>Time & weather</li><li>Motivational quotes</li><li></li>Impact tracker<li>And more to come</li></ul><br/>Pro users will get access to additional tools, custom themes, integrations, and more (coming soon). <br/><br/>Sign up for the Pro waitlist.',
  },
  {
    value: 'item-5',
    title: 'What’s included in the Pro version?',
    content:
      'The Pro version, which will be released soon, gives you more control, more focus, and more impact. You’ll get features, tool integrations (Trello, Slack, Monday, etc.), and full dashboard customisation, all while helping fund clean water with every productive day.<br/><br/>Join the Pro waitlist to be the first to know when it’s live.',
  },
  {
    value: 'item-6',
    title: 'Can I use Elliot for Water with my team or company?',
    content:
      'Absolutely. Elliot for Water works for individuals and teams. Our Business version (currently under development) is built for teams and companies that care about impact. It includes everything in Pro, from advanced productivity tools to powerful integrations, plus real-time impact tracking, ESG reports, team dashboards, and full integration with platforms like Microsoft Teams, Salesforce, and Google Workspace. It’s also fully customizable to match your brand, workflow, and reporting needs. Perfect for companies that want to combine productivity with measurable purpose.<br/><br/>Contact us to join our free B2B pilot program.',
  },
  {
    value: 'item-7',
    title: 'How do clean water donations actually work?',
    content:
      'We partner with trusted charities to fund real clean water projects. You’ll see updates and impact reports in your dashboard and on our website, so that you know exactly where your support goes.',
  },
  {
    value: 'item-8',
    title: 'How can my company advertise on Elliot for Water?',
    content:
      'We’re currently partnering with purpose-driven brands through our Sponsor Widget, which appears directly on the Elliot for Water dashboard. If your company aligns with our mission and wants to gain visibility while supporting clean water projects, we’d love to hear from you.<br/><br/>Reach out to us at info@elliotforwater.com to explore sponsorship and advertising opportunities.',
  },
  {
    value: 'item-9',
    title: 'Can I choose where my impact goes?',
    content: 'Right now, we fund projects through our vetted charity partners. In the future, we plan to let users choose the regions or types of water projects they want to support.',
  },
  {
    value: 'item-10',
    title: 'Does Elliot for Water collect my data?',
    content: "No, we do not collect personal data. We only store what's needed to run your dashboard and save your preferences. We never sell your information.",
  },
  { value: 'item-11', title: 'What browsers does it work on?', content: 'Elliot for Water works on Chrome and Firefox. We’re working to support more browsers soon.' },
];
</script>

<template>
  <div class="app-container">
    <div class="max-w-[665px] w-full mx-auto space-y-6 md:space-y-8 lg:space-y-14">
      <div class="w-full">
        <div class="text-center pb-2 md:pb-4">
          <WhiteButtonBg>
            <Button variant="quaternary" class="!px-8 !py-2"> FAQ </Button>
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
            <span class="text-center inline-block w-full"> Learn how Elliot for Water turns your productivity into clean water, what features you get, and how to do even more. </span>
          </CardDetails>
        </div>
      </div>

      <div class="w-full">
        <Accordion type="single" class="w-full" collapsible :default-value="defaultValue">
          <AccordionItem class="bg-white px-4 mb-2 rounded-[8px] overflow-hidden" v-for="item in accordionItems" :key="item.value" :value="item.value">
            <AccordionTrigger>{{ item.title }}</AccordionTrigger>
            <AccordionContent>
              <div v-html="item.content"></div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  </div>
</template>
