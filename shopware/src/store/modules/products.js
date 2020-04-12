import axios from 'axios'

const url = 'http://localhost:5000/api/products/'

export default ({
  state: {
    shoppingCart: [],
    products: [],
    product: null
  },
  mutations: {
    GET_PRODUCTS(state, data) {
      state.products = data
    },
    GET_PRODUCT_BY_ID(state, data) {
      state.product = data
    },
    UPDATE_PRODUCTS(state, products) {
    	state.products = [...state.products, {products}]
    },
    ADD_TO_CART(state, { product, quantity }) {
      let index = state.shoppingCart.findIndex(p => p.product._id === product._id)
  
      if(index !== -1) {
        // console.log(state.shoppingCart[index].quantity)
        state.shoppingCart[index].quantity += 1
        localStorage.setItem('cart', JSON.stringify(state.shoppingCart))
      } else {
        state.shoppingCart.push({ product, quantity })
        localStorage.setItem('cart', JSON.stringify(state.shoppingCart))
      }

    },
    DELETE_FROM_CART(state, id) {
      state.shoppingCart = state.shoppingCart.filter(item => { return item.product._id !== id})
      localStorage.setItem('cart', JSON.stringify(state.shoppingCart))
    },
    INCREMENT(state, product) {
      product.quantity += 1
      localStorage.setItem('cart', JSON.stringify(state.shoppingCart))
    },
    DECREMENT(state, product) {
      product.quantity -= 1
      localStorage.setItem('cart', JSON.stringify(state.shoppingCart))
      console.log(product.quantity)
    },
    UPDATE_CART(state, product) {
      let index = state.cart.findIndex((p => p.id == product._id))
      state.cart[index].quantity = product.quantity

      if(state.cart[index].quantity < 1) 
      sessionStorage.setItem('cart', state.shopppingCart)
    },
    SAVE_CART(state) {
      const order = {
        userId: localStorage.getItem('userId'),
        shoppingCart: state.shoppingCart
      }
      axios.post('http://localhost:5000/api/orders/', order)      
    }
  },
  actions: {
    getProducts({ commit }) {
      // call api ex. axios.get('url' + id)
      axios.get(url)
      .then((response) => {
        commit('GET_PRODUCTS', response.data.products)
        commit('UPDATE_PRODUCTS', response.data)
      })
    },
    getProductById({commit}, id) {
      axios.get(url + id)
      .then((response) => {
        console.log(response.data.product)
        commit('GET_PRODUCT_BY_ID', response.data.product)
      })
    },
    addProductToCart: ({commit}, {product, quantity}) => {
      commit('ADD_TO_CART', {product, quantity})
    },
    deleteProductFromCart({commit}, id ) {
      commit('DELETE_FROM_CART', id)
    },
    increment({commit}, item) {
      commit('INCREMENT', item)
    },
    decrement({commit}, item) {
      if (item.quantity <= 1) {
        commit('DELETE_PRODUCT_FROM_CART', item.product._id)
        return
      }
      commit('DECREMENT', item)
    },
    sendCart({commit}) {
      commit('SAVE_CART')
    }
  },
  getters: {
    shoppingCart(state) {

      let cart = JSON.parse(localStorage.getItem('cart'))
      if (cart !== null) {
        state.shoppingCart = cart  
      }
      
      return state.shoppingCart
    },
    shoppingCartTotal(state) {
      let total = 0
      if (state.shoppingCart.length !== 0) {
        state.shoppingCart.forEach(item => {
          total += item.product.price * item.quantity
        })
      }
      return total
    },
    shoppingCartItemCount(state) {
      let items = 0
      if (state.shoppingCart.length !== 0) {
        state.shoppingCart.forEach(item => {
          items += item.quantity
        })
      }
      return items
    },
    products(state) {
      return state.products
    },
    product(state) {
      return state.product
    }
  }
})