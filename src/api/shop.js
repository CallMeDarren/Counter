const _products = [
  { 'id':1,'title': 'iPad 4 Mini','price': 500.01, 'inventory': 2},
  { 'id': 2, 'title': 'H&M T-Shirt White', 'price': 10.99, 'inventory': 10 },
  { 'id': 3, 'title': 'Charli XCX - Sucker CD', 'price': 19.99, 'inventory': 5 },
  { 'id': 4, 'title': 'new MacBook Pro 2021', 'price': 1999, 'inventory': 3 }
];

export default{
  // 回调函数：将函数作为参数传入
  getProducts(cb){
    setTimeout(() => cb(_products), 100);
  },
  buyProducts( products, cb, errorCb){
    setTimeout(() => {
      (Math.random() > 0.5 ) ? cb() : errorCb()
    }, 100);
  }
}