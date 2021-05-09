<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    {{ this.$store.state.count }}
    <!-- <button @click="add">+</button> -->
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
  props: {
    msg: String,
  },
  data(){
    return{}
  },
  computed: mapGetters([
    'evenOrOdd'
  ]),
  methods:{
    // increment(){
    //   this.$store.commit('increment');
    // },
    // minus(){
    //   this.$store.commit('minus');
    // },
    // oddIncrement(){
    //   this.$store.dispatch('oddIncrement');
    // },
    // incrementAsync(){
    //   this.$store.dispatch('incrementAsync');
    // },

    // 将this.increment()映射为this.$store.commit('increment'); 
    // ...mapMutations([
    //   'increment', 
    //   'minus',
    //   ]),

    // 将this.add()映射为this.$store.commit('increment'); 
    // ...mapMutations({
    //   add: 'increment',
    // })

    ...mapActions([
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
