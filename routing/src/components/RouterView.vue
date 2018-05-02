<template>
  <component :is="currentView"></component>
</template>
<script>
import Vue from 'vue';
import VueRouter from 'vue-router';

import IndexBlurb from './IndexBlurb';
import DunkirkBlurb from './DunkirkBlurb';
import InterstellarBlurb from './InterstellarBlurb';
import DarkKnightBlurb from './TheDarkKnightBlurb';
import NotFoundView from './NotFoundView';
import { VueRouter } from 'vue-router/types/router';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: IndexBlurb },
  { path: '/dunkirk', component: DunkirkBlurb },
  { path: '/interstellar', component: InterstellarBlurb },
  { path: '/the-dark-knight-rises', component: DarkKnightBlurb },
  { path: '*', component: NotFoundView }
];

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default {
  name: 'router-view',
  data() {
    return {
      currentView: {},
    };
  },
  created() {
    this.currentView = this.getViewForCurrentRoute();
    
    EventBus.$on('navigate', () => {
      this.currentView = this.getViewForCurrentRoute();
    });
  },
  methods: {
    getViewForCurrentRoute() {
      var view = routes.find(r => r.path === window.location.pathname);
      return view === undefined ? NotFoundView : view.component;
    },
  }
};
</script>

