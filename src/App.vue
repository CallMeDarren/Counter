<template>
  <div id="app">
    <!-- <Counter msg="Welcome to My Vue.js App"/> -->
    <h2>{{ msg }}</h2>
    <router-link to="/counter">Go to Counter</router-link>
    <p><router-view></router-view></p>
  </div>
</template>

<script>
// import Counter from './components/Counter.vue'

export default {
  name: 'App',
  // components: {
  //   Counter
  // },
  data(){
    return{
      msg: 'Welcome to My Vue.js App',
    }
  },
  methods:{
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
