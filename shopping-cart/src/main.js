import Vue from 'vue';
import App from './app/App';
import store from './app/store';

new Vue({
    el: '#app',
    store,
    render: h => h(App)
});