<template>
  <div>
    <h2>Shopping Cart Example</h2>
    <hr />
    <h3>Products</h3>
    <div class="list">
      <ul>
        <li v-for="item in allProducts" :key="item.id">
          <p>{{ item.title }} - ${{item.price}}</p>
          <button @click="addProductToCart(item)">Add to cart</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';

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
    ...mapActions('cart',['addProductToCart']),
    ...mapGetters([]),
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