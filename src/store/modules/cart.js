import shop from '../../api/shop';
const state = () => ({
    items: [],
    checkoutStatus: null
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
  totalAmount: (state, getters) =>{
    // return getters.cartProducts.reduce((total, product)=>{
    //   return total + product.price * product.quantity;
    // }, 0);
    let total = 0;
    getters.cartProducts.forEach(it => {
      total += it.price * it.quantity;
    });
    return total;
  }
}
const actions = {
  addProductToCart({ state, commit }, product){
    commit('setCheckoutStatus', null);
    if( product.inventory > 0){
      const cartItem = state.items.find(it => it.id === product.id);
      if(!cartItem){
        commit('pushProductToCart', { id: product.id });
      }else{
        commit('incrementItemQuantity', cartItem);
      }
      commit('products/decrementProductInventory', {id: product.id}, {root: true});
    }
  },
  checkout({state, commit}, products){
    const savedCartItems = [...state.items];
    commit('setCartItems', {items: []});
    shop.buyProducts(
      products,
      ()=> commit('setCheckoutStatus', 'successful'),
      ()=>{
        commit('setCheckoutStatus', 'failed');
        commit('setCartItems', {items: savedCartItems})
      }
    )
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
  // 保存购物车的数据
  setCartItems(state,{items}){
    state.items = items;
  },
  setCheckoutStatus(state, res){
    state.checkoutStatus = res;
  }
}
export default{
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}