// import shop from '../../api/shop';
const state = () => ({
    items: [],
})
const getters = {
  cartProducts:(state, getters, rootState, rootGetters) =>{
    const allPro = rootState.products.all;
    const completePro = state.items.map(it => allPro.find(i => i.id === it.id));
    console.log('completePro', completePro);
    return completePro;
  }
}
const actions = {
  addProductToCart({ commit }, product){
    commit('pushProductToCart', { id: product.id });
  }
}
const mutations = {
    pushProductToCart(state, { id }){
    state.items.push({id, quantity: 1});
  }
}
export default{
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}