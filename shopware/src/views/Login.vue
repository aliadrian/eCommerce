<template>
<!-- Material form register -->
  <div class="card col-xs-8 col-sm-8 col-md-8 col-lg-8">

    <h5 class="card-header bg-white text-center py-4 mb-3">
      <strong class="text-info">Login</strong>
    </h5>

    <!--Card content-->
    <div class="card-body px-lg-5 pt-0">

        <!-- Form -->
      <form class="text-center" style="color: #757575;" action="#!" @submit.prevent="loginUser">
        
        <!-- First name -->
        <div class="md-form mt-3">
          <input 
          type="text" 
          id="materialRegisterFormFirstName" 
          class="form-control" 
          placeholder="Username"
          v-model="username"
          >
        </div>

          <!-- E-mail -->
        <!-- <div class="md-form mt-3">
          <input 
          type="email" 
          id="materialRegisterFormEmail" 
          class="form-control" 
          placeholder="Email"
          v-model="email"
          >
        </div> -->

          <!-- Password -->
        <div class="md-form mt-3">
          <input 
          type="password" 
          id="materialRegisterFormPassword" 
          class="form-control" 
          aria-describedby="materialRegisterFormPasswordHelpBlock" 
          placeholder="Password"
          v-model="password"
          >
          
          <small id="materialRegisterFormPasswordHelpBlock" class="form-text text-muted mb-4 mt-2">
            At least 8 characters
          </small>
        </div>

          <!-- Sign up button -->
        <input class="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit" value="Login">

          <!-- Social register -->
        <router-link to="/register" class="card-link"><span>Need an account?</span></router-link>

        <!-- <a type="button" class="btn-floating btn-fb btn-sm">
            <i class="fab fa-facebook-f"></i>
        </a>
        <a type="button" class="btn-floating btn-tw btn-sm">
            <i class="fab fa-twitter"></i>
        </a>
        <a type="button" class="btn-floating btn-li btn-sm">
            <i class="fab fa-linkedin-in"></i>
        </a>
        <a type="button" class="btn-floating btn-git btn-sm">
            <i class="fab fa-github"></i>
        </a> -->

        <hr>

          <!-- Terms of service -->
        <p>By clicking
          <em>Login</em> you agree to our
          <a href="" target="_blank">terms of service</a>
        </p>
      </form>
        <!-- Form -->
    </div>
  </div>
<!-- Material form register -->
</template>

<script>

import { mapActions } from 'vuex';

export default {
  data() {
    return {
      username: "",
      password: ""
    }
  },
  methods: {
    ...mapActions(['login']),
    loginUser() {
      let user = {
        username: this.username,
        password: this.password
      };
      this.login(user)
      .then(res => {
        if (res.data.success) {
          this.$router.push('/profile');
        }
      }).catch(err => {
        console.log(err);
      });
    }
  }
}
</script>

<style scoped>

.card {
  margin: auto;
  width: 100%;
  padding-top: 20px;
}

a[target=_blank] {
  color : rgba(23, 162, 191);
}

.card-link {
  color : rgb(115, 171, 189);
  transition: color 0.2s;
}

.card-link:hover {
  color : rgba(23, 162, 191);
}

input {
  border-radius: 0;
}

.btn {
  border-radius: 0;
}

</style>