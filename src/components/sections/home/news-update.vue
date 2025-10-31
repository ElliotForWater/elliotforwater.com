<script setup lang="ts">
interface FeedItem {
  title: string;
  link: string;
  enclosure: string;
  description: string;
  pubDate: string;
}

import { ref } from 'vue';
import Button from '@/components/ui/Button.vue';
import CardDetails from '@/components/ui/card/CardDetails.vue';
import SectionTitle from '@/components/ui/SectionTitle.vue';
import WhiteButtonBg from '@/components/ui/white-button-bg.vue';
import getAndParseRSS from '@/lib/rss';

const activeNews = { id: 1, img: "/images/news/1.webp", date: "oct 2024", description: "Over 1 Million Gallons of Clean Water Donated Thanks to Our Users" }

const newsUpdate = [
    { id: 1, img: "/images/news/2.webp", date: "oct 2024", description: "Breaking: Your Tabs Just Helped Fund a New Well in Rural Kenya" },
    { id: 2, img: "/images/news/3.webp", date: "oct 2024", description: "Clean Water for All: How Simple Web Habits Are Saving Lives" },
    { id: 3, img: "/images/news/4.webp", date: "oct 2024", description: "Global Impact: Thousands of New Tabs Open, Hundreds of Lives Improved" },
]

const feedItems = ref<FeedItem[]>([]);
getAndParseRSS('https://elliotforwater.fidsy.cloud/api/rss').then((feed: any) => {
  feed.items.map((item: FeedItem, index: number) => {
    item.pubDate = item.pubDate?.substring?.(0, item.pubDate?.lastIndexOf?.(':'));
    if (index <= 4) feedItems.value.push(item);
  });
});

</script>

<template>
    <div class="app-container" v-if="feedItems?.length > 0">
        <div class="max-w-[1090px] w-full mx-auto space-y-6">
            <div class="w-full space-y-10 mb-10">
                <WhiteButtonBg>
                    <Button href="https://blog.elliotforwater.com/" target="_blank" variant="quaternary" class="!px-8 !py-2">
                        News & Updates
                    </Button>
                </WhiteButtonBg>

                <div class="w-full space-y-1">
                    <SectionTitle>
                        <a href="https://blog.elliotforwater.com/" target="_blank"><span class="text-primary-300">The Elliot Journal</span></a>
                    </SectionTitle>
                    <CardDetails>
                        Explore the latest updates, features, and stories from Elliot for Water, from product
                        improvements to clean water impact around the world.
                    </CardDetails>
                </div>
            </div>

            <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">

                <div class="w-full aspect-square rounded-4xl overflow-hidden border-2 p-1 border-neutral-100">
                    <div class="w-full h-full relative rounded-[28px] overflow-hidden">
                        <a :href="feedItems?.[0]?.link" target="_blank">
                          <img :src="feedItems?.[0]?.enclosure" alt="img" class="w-full h-full object-cover">
                          <div
                              class="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgb(0,0,0)_100%)] flex items-end">
                              <div class="max-w-[350px] w-full space-y-1.5 text-white p-7 font-bold">
                                  <div class="uppercase text-xs">
                                      {{ feedItems?.[0]?.pubDate }}
                                  </div>
                                  <div class="text-sm sm:text-base">
                                      {{ feedItems?.[0]?.title }}
                                  </div>
                              </div>
                          </div>
                        </a>
                    </div>
                </div>

                <div class="w-full">
                    <div v-for="(news, index) in feedItems" :key="index">
                        <a :href="news.link" target="_blank" v-if="index !== 0" class="py-3 md:py-6 md:px-8 flex items-center gap-6">
                          <div
                              class="shrink-0 size-[128px] rounded-[8px] overflow-hidden border-2 p-1 border-neutral-100">
                              <div class="w-full h-full relative rounded-[6px] overflow-hidden">
                                  <img :src="news.enclosure" alt="img" class="size-full">
                              </div>
                          </div>
                          <div class="space-y-1 font-semibold max-w-[340px] w-full">
                              <div class="text-xs text-neutral-400 uppercase">
                                {{ news.pubDate }}
                              </div>
                              <div class="text-sm sm:text-base text-primary-900">
                                {{ news.title }}
                              </div>
                              <div class="text-sm text-gray-600">
                                {{ news.description }}
                              </div>
                          </div>
                        </a>
                    </div>

                    <a href="https://blog.elliotforwater.com/" target="_blank"
                        class="font-medium inline-flex items-center justify-between gap-3 text-primary-300 py-[18px] px-8 group">
                        <span>
                            Discover more
                        </span>
                        <svg class="mt-0.5 group-hover:translate-x-1 transition-all duration-300" width="12" height="10"
                            viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11.8538 5.35354L7.35375 9.85354C7.25993 9.94736 7.13268 10.0001 7 10.0001C6.86732 10.0001 6.74007 9.94736 6.64625 9.85354C6.55243 9.75972 6.49972 9.63247 6.49972 9.49979C6.49972 9.36711 6.55243 9.23986 6.64625 9.14604L10.2931 5.49979H0.5C0.367392 5.49979 0.240215 5.44711 0.146447 5.35334C0.0526785 5.25958 0 5.1324 0 4.99979C0 4.86718 0.0526785 4.74 0.146447 4.64624C0.240215 4.55247 0.367392 4.49979 0.5 4.49979H10.2931L6.64625 0.85354C6.55243 0.759719 6.49972 0.632472 6.49972 0.49979C6.49972 0.367108 6.55243 0.23986 6.64625 0.14604C6.74007 0.0522194 6.86732 -0.000488281 7 -0.000488281C7.13268 -0.000488281 7.25993 0.0522194 7.35375 0.14604L11.8538 4.64604C11.9002 4.69248 11.9371 4.74762 11.9623 4.80832C11.9874 4.86902 12.0004 4.93408 12.0004 4.99979C12.0004 5.0655 11.9874 5.13056 11.9623 5.19126C11.9371 5.25196 11.9002 5.3071 11.8538 5.35354Z"
                                fill="#4D62FF" />
                        </svg>
                    </a>

                </div>
            </div>

        </div>
    </div>
</template>