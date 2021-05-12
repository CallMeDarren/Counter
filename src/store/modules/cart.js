// import shop from '../../api/shop';
const state = () => ({
    items: [],
})
const getters = {
  cartProducts:(state, getters, rootState) =>{
    const allPro = rootState.products.all;
    return state.items.map(({id, quantity}) =>{
    const product = allPro.find(i => i.id === id);
    return {
      title: product.title,
      price: product.price,
      quantity: quantity,
    }
    });
  },
  totalAmount(state, getters){
    let total = 0;
    getters.cartProducts.forEach(it => {
      total += Number(it.price) * Number(it.quantity) ;
    });
    return total;
  }
}
const actions = {
  addProductToCart({ state, commit }, product){
    // commit('setCheckoutStatus');
    if( product.inventory > 0){
      const cartItem = state.items.find(it => it.id === product.id);
      if(!cartItem){
        commit('pushProductToCart', { id: product.id });
      }else{
        commit('incrementItemQuantity', cartItem);
      }
      commit('products/decrementProductInventory', {id: product.id}, {root: true});
    }
  }
}
const mutations = {
  pushProductToCart(state, { id }){
    state.items.push({id, quantity: 1});
  },
  incrementItemQuantity(state, { id }){
    const cartItem = state.items.find(it => it.id === id);
    cartItem.quantity++;
  },
}
export default{
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}