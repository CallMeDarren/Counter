<template>
    <div>
       <product-list></product-list>
       <hr/>
       <h3>Your Cart</h3>
       <p>{{msg}}</p>
       <ul>
         <li v-for="item in cartProducts" :key="item.id">
           {{ item.title }} - {{ item.price }}
         </li>
       </ul>
       <p>Total:${{ totalAmount }}</p>
    </div>
</template>

<script>
import ProductList from './ProductList';
import {mapState} from 'vuex';

export default {
  name: 'shoppingCart',
  components: {
    ProductList,
  },
  computed:{
    ...mapState('cart',{ cartProducts: state => state.items }),
  },
  data() {
    return {
      msg: 'Please add some products to cart.',
      totalAmount: 0,
     }
},
  methods: {


  },
}
</script>

<style>


</style>