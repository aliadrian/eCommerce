<template>
<div>
  <h1>Profile</h1>
  <div class="card" v-if="user">
    <ul class="list-group">
      <li class="list-group-item d-flex justify-content-start"><span>Email:</span>{{ user.email }}</li>
      <li class="list-group-item d-flex justify-content-start"><span>Username:</span> {{ user.username }}</li>
      <li class="list-group-item d-flex justify-content-start"><span>Name:</span>{{ user.name }}</li>
    </ul>
  </div>
</div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';

export default {
  computed: mapGetters(['user']),
  methods: {
    ...mapActions(['getProfile'])
  },
  created() {
    this.getProfile();
  }
}
</script>

<style>

  h1 {
    color : rgba(23, 162, 191);
  }

  .card {
    border: none;
  }

  span {
    color: rgba(23, 162, 191);
    padding-right: 5px;
  }

</style>