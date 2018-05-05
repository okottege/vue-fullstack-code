import Vue from 'vue';
import App from './app/App';
import store from './app/store';
import router from './app/router';

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
});
