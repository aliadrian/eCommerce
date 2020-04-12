<template>
  <div>

    <ShoppingCartProduct v-for="product in shoppingCart" :key="product._id" :item="product" />

    <div v-if="shoppingCart.length < 1" class="cart-item">
        <div class="p-2 d-flex justify-content-center align-items-center">
            <div class="d-flex align-items-center">
                Din kundvagn är tom.
            </div>
        </div>
        <div class="dropdown-divider"></div>
    </div>


    <div class="p-2 d-flex justify-content-between align-items-center">
        <div class="ml-2">
            <div class="total-price">
                Totalt: <span class="ml-1">{{ shoppingCartTotal }} SEK</span>
            </div>
            <small class="text-muted">inkl. moms</small>
        </div>
        <router-link to="/cart" class="btn btn-default" v-on:click.stop=""><span class="text-white">Gå till Kassan</span></router-link>
    </div>

  </div>
</template>

<script>

import ShoppingCartProduct from './ShoppingCartProduct'
import { mapGetters } from 'vuex'

export default {
  name: 'ShoppingCart',
  components: {
    ShoppingCartProduct
  },
  computed: {
    ...mapGetters(['shoppingCart', 'shoppingCartTotal', 'products'])
  }
}
</script>

<style scoped>

</style>