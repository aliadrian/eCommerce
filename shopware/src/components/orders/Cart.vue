<template>
  <table class="table">
  <thead>
    <tr>
      <th scope="col">Quantity</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Image</th>

    </tr>
  </thead>
  <tbody v-for="product in shoppingCart" :key="product._id">
    <tr>
      <th scope="row">{{ product.quantity}}</th>
      <td>{{ product.product.name }}</td>
      <td>{{ product.product.price }}</td>
      <td><img :src="product.product.productImage" alt="" width="75" height="75"></td>
    </tr>
  </tbody>  
  <p class="mb-5">{{ shoppingCart }}</p>
  {{ info }}
  <p class="ml-2 mt-5">Total: {{ shoppingCartTotal }}</p>
  <button @click="orderCart()" class="btn btn-success">Checkout</button>
</table>

<!-- Card -->
</template>

<script>

import { mapGetters, mapActions } from 'vuex'
import axios from 'axios'

export default {
  props: ['item'],
  computed: {
    ...mapGetters(['shoppingCart', 'products', 'shoppingCartTotal'])
  },
  data() {
    return {
      info: null
    }
  },
  methods: {
    ...mapActions(['sendCart']),
  orderCart() {
    let shoppingCart = {
      userId: this.userId,
      shoppingCart: this.shoppingCart
    }
    this.sendCart(shoppingCart).then(res => {
      if (res.data.success) {
        // console.log(shoppingCart)
      }
    });
  }
  },
  mounted() {
    axios.get('http://localhost:5000/api/orders/')
    .then(response => (this.info = response.data))
  } 
}
</script>

<style scoped>

</style>

   