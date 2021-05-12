<template>
  <div>
    <product-list></product-list>
    <hr>
    <h3>Your Cart</h3>
    <div class="flexBox">
      <div>
          <p v-if="!cartProducts.length">{{ msg }}</p>
          <div class="list">
            <ul>
              <li v-for="item in cartProducts" :key="item.id">
                {{ item.title }} - ${{ item.price }} x{{ item.quantity }}
              </li>
            </ul>
          </div>
      </div>

      <div>
        <p>Total:${{ totalAmount }}</p>
        <p>
          <button 
            :disabled="!cartProducts.length"
            @click="checkout(cartProducts)"
          >Checkout</button>
      </p>
      <p v-show="checkoutStatus">Checkout {{checkoutStatus}}!</p>
      </div>
    </div>
  </div>
</template>

<script>
import ProductList from "./ProductList";
import { mapGetters, mapState } from "vuex";

export default {
  name: "shoppingCart",
  components: {
    ProductList,
  },
  computed: {
    ...mapGetters("cart", ["cartProducts", "totalAmount"]),
    ...mapState("cart",{checkoutStatus: state => state.checkoutStatus})
  },
  data() {
    return {
      msg: "Please add some products to cart.",
    };
  },
  methods: {
    checkout(cartProducts){
      this.$store.dispatch('cart/checkout', cartProducts);
    }
  },
};
</script>

<style>
.flexBox{
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
}
.list {
  display: flex;
  justify-content: center;
  text-align: left;
}
</style>