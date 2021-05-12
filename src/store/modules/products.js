import shop from '../../api/shop';
const state = () => ({
    all: [],
})
const getters = {
  // getProductsById: ()=>{}
}
const actions = {
  getAllProducts({ commit }){
    shop.getProducts( products => {
      commit('setProducts', products);
    });
  },
}
const mutations = {
  setProducts(state, products){
    state.all = products;
  },
  decrementProductInventory(state, { id }){
    const item = state.all.find(it => it.id === id);
    item.inventory--;
  }
}
export default{
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}