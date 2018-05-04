import Vue from 'vue';
import Router from 'vue-router';

import IndexBlurb from '../components/IndexBlurb';
import DunkirkBlurb from '../components/DunkirkBlurb';
import InterstellarBlurb from '../components/InterstellarBlurb';
import DarkKnightBlurb from '../components/TheDarkKnightBlurb';
import NotFoundView from '../components/NotFoundView';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'index', component: IndexBlurb },
    { path: '/dunkirk', name: 'dunkirk', component: DunkirkBlurb },
    { path: '/interstellar', name: 'interstellar', component: InterstellarBlurb },
    { path: '/the-dark-knight-rises', name: 'the-dark-knight-rises', component: DarkKnightBlurb },
    { path: '*', name: 'not-found', component: NotFoundView }
  ],
});
