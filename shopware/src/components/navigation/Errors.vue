<template>
  <div class="d-flex justify-content-center">
    <div class="alert alert-danger col-xs-8 col-sm-8 col-md-8 col-lg-8">{{ msg }}</div>
  </div>
</template>

<script>
export default {
  props: ['msg']
}
</script>

<style scoped>
  .alert {
    border-radius: 0;
  }

  .alert-danger {
    background: red;
    color: #ffffff;
  }
</style>