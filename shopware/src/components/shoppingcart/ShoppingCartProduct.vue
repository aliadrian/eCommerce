<template>
  <div class="cart-item">
      <div class="p-2 d-flex justify-content-between align-items-center">
          <div class="d-flex align-items-center">
            <img :src="item.product.productImage" alt="" class="img-fluid image-width">
            <div>
              <div class="pl-3"><strong>{{ item.product.name }}</strong></div>
              <div class="pl-3"><small> {{ item.quantity }} x {{ item.product.price }}</small></div>          
            </div>
          </div>
          <div>
            <div class="btn-group btn-group-sm" role="group" aria-label="quantity">
              <button type="button" class="btn btn-grey px-3" v-on:click.stop="decrement(item)">-</button>
              <button type="button" class="btn btn-grey px-3" v-on:click.stop="addProductToCart(item)">+</button>
            </div>

            <div class="btn-group btn-group-sm" role="group" aria-label="trash">
              <button class="btn btn-danger px-3" v-on:click.stop="deleteProductFromCart(item.product._id)"><i class="fas fa-trash"></i></button>
            </div>
          </div>
      </div>
      <div class="dropdown-divider"></div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['item'],
  methods: {
    ...mapActions(['deleteProductFromCart', 'addProductToCart', 'decrement'])
  }
}
</script>

<style scoped>
  .image-width {
    width: 90px;
  }
</style>