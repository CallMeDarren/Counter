<template>
    <div>
       <product-list></product-list>
       <hr/>
       <h3>Your Cart</h3>
       <p>{{msg}}</p>
       <p>Total:${{ totalAmount }}</p>
    </div>
</template>

<script>
import ProductList from './ProductList';

export default {
  name: 'shoppingCart',
  components: {
    ProductList,
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