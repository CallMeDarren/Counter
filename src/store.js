import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  count: 0
}
const mutations = {
  increment(state) {
    state.count++;
  },
  minus(state){
    state.count--;
  }
}
const actions = {
  increment: ({ commit }) => commit('increment'),
  // 这两种写方法都可以，但尤雨溪的实例中采用第一种，暂时不知道区别
  minus ({ commit }){
    commit('minus');
  },
  oddIncrement ({ commit, state }) {
    if(state.count % 2 !== 0){
      commit('increment');
    }
  },
  incrementAsync({ commit }){
    return new Promise((resolve)=>{
      setTimeout(() => {
        commit('increment');
        resolve();
      }, 1000);
    })
  }
}
// getters相当于是store的计算属性，有缓存值，值发生变化才会重新计算
const getters = {
  evenOrOdd: state => state.count % 2 == 0 ? "even": "odd",
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});