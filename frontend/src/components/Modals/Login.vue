
<template>
  <div>
    <b-modal id="modal-1" title="Login" size="sm" centered>
      <b-alert variant="danger" show v-if="errors">{{errors}}</b-alert>
      <div class="text-center">
        <p class="bold text-center">LOGIN</p>
          <b-form-input class="mb-2" placeholder="Email" type="text" v-model="email"></b-form-input>
          <b-form-input class="mb-2" placeholder="Password" type="password" v-model="password"></b-form-input>
            <button v-if="!processing" class="btn btn-primary btn-block" @click="submit" :disabled="!email || !password"> LOGIN</button>
            <button v-else class="btn btn-primary btn-block"><i class="fas fa-spinner fa-spin"></i></button>
              <br>
              <p class="text-small m-0">Don't have an account?</p>
              <a href="#!">Register</a>
      </div>
    </b-modal>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
export default {
  name: 'Login',
  created() {
    
  },
  data() {
    return {
      email: null,
      password: null,
      processing: false,
    }
  },
  props: {
   
  },
  computed: {
    ...mapGetters({
      errors: 'auth/getErrors',
      authenticatedUser: 'auth/getAuthenticatedUser'
    })
  },
  methods: {
   ...mapActions({
     login: 'auth/login'
   }),
   
   submit(){ 

     this.processing = true;

     if(!this.email || !this.password){
        alert('Email and Password Required')
        this.processing = false;
        return;
     }

    this.login({email: this.email, password: this.password})
    .then(() =>{
      this.processing = false;
      //this.$router.push('dashboard');
    })
    .catch(e => {
      this.processing = false;
      console.log(e)
      
    })
   }
  },
}
</script>

<style lang="scss">
  @import '../../assets/sass/variables';
  .modal-header{
    display:none !important;
  }
  .modal-content{
    background:$nav-bg !important;
    border:none !important;
    border-radius:7px;
  }
  .modal-footer{
    display:none !important;
  }
</style>

