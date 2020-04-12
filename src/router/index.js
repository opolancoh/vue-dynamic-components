/* eslint-disable implicit-arrow-linebreak */
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
      header: () =>
        import(/* webpackChunkName: "header-default" */ '../components/HeaderDefault.vue'),
    },
  },
  {
    path: '/free',
    name: 'Free',
    components: {
      default: () => import(/* webpackChunkName: "free" */ '../views/Free.vue'),
      header: () =>
        import(/* webpackChunkName: "header-default" */ '../components/HeaderDefault.vue'),
    },
  },
  {
    path: '/pro',
    name: 'Pro',
    components: {
      default: () => import(/* webpackChunkName: "pro" */ '../views/Pro.vue'),
      header: () => import(/* webpackChunkName: "header-pro" */ '../components/HeaderPro.vue'),
    },
  },
  {
    path: '/enterprise',
    name: 'Enterprise',
    components: {
      default: () => import(/* webpackChunkName: "enterprise" */ '../views/Enterprise.vue'),
      header: () =>
        import(/* webpackChunkName: "header-default" */ '../components/HeaderDefault.vue'),
    },
  },
  {
    path: '/about',
    name: 'About',
    components: {
      default: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
      header: () =>
        import(/* webpackChunkName: "header-default" */ '../components/HeaderDefault.vue'),
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
