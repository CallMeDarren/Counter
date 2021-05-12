<template>
  <div>
    <product-list></product-list>
    <hr />
    <h3>Your Cart</h3>
    <p v-if="!cartProducts.length">{{ msg }}</p>
    <div class="list">
      <ul>
        <li v-for="item in cartProducts" :key="item.id">
          {{ item.title }} - ${{ item.price }} x{{ item.quantity }}
        </li>
      </ul>
    </div>
    <p>Total:${{ totalAmount }}</p>
    <p>
      <button :disabled="!cartProducts.length">Checkout</button>
    </p>
  </div>
</template>

<script>
import ProductList from "./ProductList";
import { mapGetters } from "vuex";

export default {
  name: "shoppingCart",
  components: {
    ProductList,
  },
  computed: {
    ...mapGetters("cart", ["cartProducts", "totalAmount"]),
  },
  updated() {
    console.log("cartProducts", this.cartProducts);
  },
  data() {
    return {
      msg: "Please add some products to cart.",
    };
  },
  methods: {},
};
</script>

<style>
.list {
  display: flex;
  justify-content: center;
  text-align: left;
}
</style>