<template>
<!-- Material form register -->
  <div class="card col-xs-8 col-sm-8 col-md-8 col-lg-8 mb-4">

    <h5 class="card-header bg-white text-center py-4 mb-3">
      <strong class="text-info">Register</strong>
    </h5>

    <!--Card content-->
    <div class="card-body px-lg-5 pt-0">

        <!-- Form -->
      <form class="text-center" style="color: #757575;" action="#!"  @submit.prevent="registerUser">

        <!-- Username -->
        <div class="md-form mt-3">
          <input 
          type="text" 
          id="username" 
          class="form-control" 
          placeholder="Username"
          name="username"
          v-model="username"
          >
        </div>  
        
        <!-- Name -->
        <div class="md-form mt-3">
          <input 
          type="text" 
          id="name" 
          class="form-control" 
          placeholder="Name"
          name="name"
          v-model="name"
          >
        </div>
        
          <!-- E-mail -->
        <div class="md-form mt-3">
          <input 
          type="email" 
          id="email" 
          class="form-control" 
          placeholder="Email"
          name="email"
          v-model="email"
          >
        </div>

          <!-- Password -->
        <div class="md-form mt-3">
          <input 
          type="password" 
          id="password" 
          class="form-control" 
          aria-describedby="materialRegisterFormPasswordHelpBlock" 
          placeholder="Password"
          name="password"
          v-model.trim="$v.password.$model"
          :class="{ 'is-invalid': $v.password.$error,
          'is-valid':!$v.password.$invalid}">
          <div class="valid-feedback">Your password is valid.</div>
          <div class="invalid-feedback">
            <span v-if="!$v.password.required">Password is required.</span>
            <span v-if="!$v.password.minLength">{{ $v.password.$params.minLength.min }} characters minimum.</span>
          </div>
        <!-- </div> -->
        
        <div class="md-form mt-3">
          <input 
          type="password" 
          id="materialRegisterFormPassword" 
          class="form-control"
          aria-describedby="materialRegisterFormPasswordHelpBlock" 
          placeholder="Confirm Password"
          v-model.trim="$v.confirm_password.$model"
          :class="{ 
            'is-invalid': $v.confirm_password.$error, 
            'is-valid': (password != '') ? !$v.confirm_password.$invalid : ''}">
            <div class="valid-feedback">Password confirmed.</div>
            <div class="invalid-feedback">
              <span v-if="!$v.confirm_password.sameAsPassword">Passwords must be identical.</span>
            </div>
        </div>

          <small id="materialRegisterFormPasswordHelpBlock" class="form-text text-muted mb-4 mt-2">
            At least 8 characters
          </small>
        </div>

          <!-- Sign up button -->
        <button class="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0">Register</button>

          <!-- Social register -->

        <router-link to="/login" class="card-link"><span>Already have an account?</span></router-link>

        <!-- <p>or login with:</p> -->

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
// import { ValidationProvider, extend, ValidationObserver } from "vee-validate";
import { required, minLength, sameAs } from 'vuelidate/lib/validators'
// const alpha = helpers.regex('alpha', /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)

export default {
  components: {

  },
  data() {
    return {
      username: "",
      email: "",
      password: "",
      name: "",
      confirm_password: ""
    };
  },
    validations: {
    password: {
      required,
      minLength: minLength(8)
    },
    confirm_password: {
      sameAsPassword: sameAs('password')
    }
  },
  methods: {
    ...mapActions(["register"]),
    registerUser() {
      let user = {
        username: this.username,
        password: this.password,
        confirm_password: this.confirm_password,
        email: this.email,
        name: this.name
      }
      this.register(user).then(res => {
        if (res.data.success) {
          this.$router.push("login");
        }
      });
    }
  }
};

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