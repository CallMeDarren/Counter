<template>
<div>
  <h3>Shopping Cart Example</h3>
  <hr>
  <div class="layout">
    <template>
      <product-list :message = "msg" :hello = "hello"></product-list>
    </template>
    <div class="cart-box">
      <h3>Your Cart</h3>
      <div class="list">
          <p v-if="!cartProducts.length">{{ msg }}</p>
          <div>
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
    // ...mapState("cart",{checkoutStatus: state => state.checkoutStatus})
    ...mapState({
      checkoutStatus: state => state.cart.checkoutStatus
    }),
  },
  data() {
    return {
      msg: "Please add some products to cart.",
      hello: "hello, I'm grandson component"
    };
  },
  methods: {
    checkout(cartProducts){
      this.$store.dispatch('cart/checkout', cartProducts);
    }
  },
};
</script>

<style scoped>
.layout{
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
}
.cart-box{
  display: flex;
  flex-direction: column;
}
/* css穿透 ：/deep/*/
>>>.list {
    text-align: left;
  }

</style>