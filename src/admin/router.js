import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import about from "./components/about";
import blog from "./components/blog";
import works from "./components/works";

const routes = [
  {
    path: '/admin',
    component: about
  },
  {
    path: '/admin/blog',
    component: blog
  },
  {
    path: '/admin/works',
    component: works
  }
];

export default new VueRouter({ routes, mode: 'history'})
