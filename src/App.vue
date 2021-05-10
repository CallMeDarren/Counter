<template>
  <div id="app">
    <h2>{{ msg }}</h2>
    <button @click="goBack">goBack</button>
    <p><router-link to="/counter">Go to Counter</router-link></p>
    <p><router-link to="/shoppingcart">Go to shoppingCart</router-link></p>
    <p><router-view></router-view></p>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      msg: 'Welcome to My Vue.js App',
    }
  },
  methods:{
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
