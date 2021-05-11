// import shop from '../../api/shop';
const state = () => ({
    items: [],
})
const getters = {
//     cartProducts:(state, rootState) =>{
//         return state.items.map(({id}) =>{
            
//         } )
//     }
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