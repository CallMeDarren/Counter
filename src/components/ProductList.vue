<template>
  <div>
    <h2>Shopping Cart Example</h2>
    <hr />
    <h3>Products</h3>
    <div class="list">
      <ul>
        <li>
          <p>iPad4 Mini - $500.01</p>
          <button>Add to cart</button>
        </li>
        <li>
          <p>H&M T-Shirt White - $10.99</p>
          <button>Add to cart</button>
        </li>
        <li>
          <p>Charli XCX - Sucker CD - $19.99</p>
          <button>Add to cart</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductList",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
.list{
  display: flex;
  justify-content: center;
  text-align: left;
}
</style>