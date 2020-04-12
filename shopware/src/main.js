import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';

Vue.use(Vuelidate)

Vue.config.productionTip = false

// Setting up default vue's http modules for api calls
Vue.prototype.$http = axios;
// load the token from the localStorage
const token = localStorage.getItem("token");
// If there is any token then we will simply default axios authorization headers
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token;
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
