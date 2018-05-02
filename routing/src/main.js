import Vue from 'vue'
import VueRouter from 'vue-router';

import App from './App.vue'
import { router } from './App.vue';

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
