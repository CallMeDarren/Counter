<template>
  <div class="hello">
    {{ this.$store.state.counter.count }}
    <button @click="increment">+</button>
    <button @click="minus">-</button>
    <button @click="oddIncrement">increment if odd</button>
    <button @click="incrementAsync">incrementAsync</button>
    count is {{evenOrOdd}}
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Counter',
  computed: mapGetters('counter',[
    'evenOrOdd'
  ]),
  created(){
  },
  methods:{
    // 将组件methods中的this.increment()映射为this.$store.commit('increment'); 
    // ...mapMutations([
    //   'increment', 
    //   'minus',
    //   ]),

    // 将this.add()映射为this.$store.commit('increment'); 
    // ...mapMutations({
    //   add: 'increment',
    // })

    ...mapActions('counter',[
      'increment', 
      'minus',
      'oddIncrement',
      'incrementAsync',
    ]),
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
button{
  margin: 0 2px;
}
</style>
