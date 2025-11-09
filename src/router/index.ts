import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Cookie from '../views/Cookie.vue';
import Privacy from '../views/Privacy.vue';
import Terms from '../views/Terms.vue';
import Donate from '../views/Donate.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/cookie',
      name: 'cookie',
      component: Cookie,
    },
    {
      path: '/terms',
      name: 'terms',
      component: Terms,
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: Privacy,
    },
    {
      path: '/donate',
      name: 'donate',
      component: Donate,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, behavior: 'smooth' };
    }
  },
});

export default router;
