<template>
  <component :is="currentView"></component>
</template>
<script>
import IndexBlurb from './IndexBlurb';
import DunkirkBlurb from './DunkirkBlurb';
import InterstellarBlurb from './InterstellarBlurb';
import DarkKnightBlurb from './TheDarkKnightBlurb';
import NotFoundView from './NotFoundView';
import { EventBus } from '../EventBus';

const routes = [
  { path: '/', component: IndexBlurb },
  { path: '/dunkirk', component: DunkirkBlurb },
  { path: '/interstellar', component: InterstellarBlurb },
  { path: '/the-dark-knight-rises', component: DarkKnightBlurb },
];

export default {
  name: 'router-view',
  data() {
    return {
      currentView: {},
    };
  },
  created() {
    const view = this.getRouteObject();
    this.currentView = view === undefined ? NotFoundView : view.component;

    EventBus.$on('navigate', () => {
      this.currentView = this.getRouteObject().component;
    });
  },
  methods: {
    getRouteObject() {
      return routes.find(r => r.path === window.location.pathname);
    }
  }
};
</script>

