import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
  },
  {
    path: '/free',
    name: 'Free',
    component: () => import(/* webpackChunkName: "free" */ '../views/Free.vue'),
  },
  {
    path: '/pro',
    name: 'Pro',
    component: () => import(/* webpackChunkName: "pro" */ '../views/Pro.vue'),
  },
  {
    path: '/enterprise',
    name: 'Enterprise',
    component: () => import(/* webpackChunkName: "enterprise" */ '../views/Enterprise.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
