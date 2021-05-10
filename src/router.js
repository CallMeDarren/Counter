import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import counter from './components/Counter.vue';
import shoppingCart from './components/ShoppingCart.vue';

const routes = [{
    path: '/counter',
    component: counter
  },{
    path: '/shoppingcart',
    component: shoppingCart
  }
];
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})
export default router;