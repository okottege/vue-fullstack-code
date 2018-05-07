import Vue from 'vue';
import VueRouter from 'vue-router';

import CartList from '../components/cart/CartList';
import ProductList from '../components/product/ProductList';
import NotFound from '../components/NotFound';
import ProductItem from '../components/product/ProductItem';
import LoginBox from '../components/login/LoginBox';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/products', component: ProductList },
        { path: '/cart', component: CartList },
        { path: '/', redirect: '/products' },
        { path: '*', component: NotFound },
        { path: '/products/:id', component: ProductItem, props: true },
        { path: '/login', component: LoginBox },
    ],
});

export default router;
