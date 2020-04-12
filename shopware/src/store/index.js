import Vue from 'vue'
import Vuex from 'vuex'

import products from './modules/products'
import auth from './modules/Auth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    products,
    auth
  }
})