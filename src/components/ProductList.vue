<template>
  <div>
    <h3>Shopping Cart Example</h3>
    <hr>
    <h3>Products</h3>
    <div class="list">
      <ul>
        <li v-for="item in allProducts" :key="item.id">
          <p>{{ item.title }} - ${{item.price}}</p>
          <button :disabled="!item.inventory" @click="addProductToCart(item)">Add to cart</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: "ProductList",
  data() {
    return {};
  },
  created(){
    this.$store.dispatch('products/getAllProducts');
  },
  computed:{
    ...mapState('products', { allProducts: state => state.all }),
  },
  methods: {
    ...mapActions('cart', ['addProductToCart'])
  },
};
</script>

<style>
.list {
  display: flex;
  justify-content: center;
  text-align: left;
}
</style>