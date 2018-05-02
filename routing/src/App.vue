<template>
  <div id="app">
    <div class="movies">
      <h2>Which movie?</h2>
      <router-link to="/dunkirk"></router-link>
      <router-link to="/interstellar"></router-link>
      <router-link to="/the-dark-knight-rises"></router-link>
      
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import VueRouter from 'vue-router';

import IndexBlurb from './components/IndexBlurb';
import DunkirkBlurb from './components/DunkirkBlurb';
import InterstellarBlurb from './components/InterstellarBlurb';
import DarkKnightBlurb from './components/TheDarkKnightBlurb';
import NotFoundView from './components/NotFoundView';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: IndexBlurb },
  { path: '/dunkirk', component: DunkirkBlurb },
  { path: '/interstellar', component: InterstellarBlurb },
  { path: '/the-dark-knight-rises', component: DarkKnightBlurb },
  { path: '*', component: NotFoundView }
];

export const router = new VueRouter({
  mode: 'history',
  routes,
});

export default {
  name: 'App',
};
</script>
