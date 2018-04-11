import Vue from 'vue';
import App from './app/App.vue';
import  store from './app/Store';

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
