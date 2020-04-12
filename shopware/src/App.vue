<template>
  <div>
    <Navbar />

    <div class="container custom-margin-top">
        <Errors v-if="error" :msg="error" />
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/navigation/Navbar'
import Errors from "@/components/navigation/Errors"
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  components: {
    Navbar,
    Errors
  },
  computed: {
    ...mapGetters(['error'])
  }
}
</script>

<style scoped>
  .custom-margin-top {
    padding-top: 100px;
  }

</style>
