import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import notFound from './components/404.vue';
import counter from './components/Counter.vue';
import shoppingCart from './components/ShoppingCart.vue';

const routes = [
  {
    path: '/counter',
    name: 'home-counter',
    component: counter
  }, {
    path: '/shoppingcart',
    name: 'home-shoppingcart',
    component: shoppingCart
  }, {
    path: '*',
    component: notFound,
  },
];
const router = new VueRouter({
  routes, // (缩写) 相当于 routes: routes
})
export default router;