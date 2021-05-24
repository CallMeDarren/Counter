<template>
  <div>
    <h3>Products</h3>
    <div class="list">
      <ul>
        <li v-for="item in allProducts" :key="item.id">
          <p>{{ item.title }} - ${{item.price}} - inventory:{{ item.inventory}}</p>
          <button :disabled="!item.inventory" @click="addProductToCart(item)">Add to cart</button>
        </li>
      </ul>
    </div>
    <p> {{ message}} -- {{ $attrs }}</p>
    <grand-son v-bind="$attrs"></grand-son>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import GrandSon from "./GrandSon";

export default {
  name: "ProductList",
  components:{
    GrandSon,
  },
  inheritAttrs: true,
  props: ["message"],
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
/* 父组件的css样式下沉到子组件 */
/* .list {
  display: flex;
  justify-content: center;
  text-align: left;
} */
</style>