
<template>
  <div>
    <b-modal id="modal-2" title="Register" size="sm" centered>
      <b-alert variant="danger" show v-if="errors">{{errors}}</b-alert>
      <div class="text-center">
        <p class="bold text-center">REGISTER</p>
          <b-form-input class="mb-2" placeholder="Name" type="text" v-model="name"></b-form-input>
          <b-form-input class="mb-2" placeholder="Email" type="email" v-model="email"></b-form-input>
          <b-form-input class="mb-2" placeholder="Password" type="password" v-model="password"></b-form-input>
          <b-form-input class="mb-2" placeholder="Confirm Password" type="password" v-model="passwordConfirmation"></b-form-input>
            <button v-if="!processing" class="btn btn-primary btn-block" @click="submit" :disabled="!name ||!email || !password || !passwordConfirmation"> REGISTER</button>
            <button v-else class="btn btn-primary btn-block"><i class="fas fa-spinner fa-spin"></i></button>
              <br>
              <p class="text-small m-0">Already have an account?</p>
              <a href="#!">Login</a>
      </div>
    </b-modal>   
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
export default {
  name: 'Register',
  created() {

  },
  data() {
    return {
      processing: false,
      name: '',
      email: '',
      password: '',
      passwordConfirmation: ''

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
     register: 'auth/register'
   }),
   submit(){
    this.processing = true;

     if(!this.name || !this.email || !this.password || !this.passwordConfirmation){
        alert('All Fields Required')
        this.processing = false;
        return;
     }

    this.register({
      name: this.name,
      email: this.email, 
      password: this.password,
      password_confirmation: this.passwordConfirmation
    })
    .then(() =>{
      this.processing = false;
      //this.$router.push('dashboard');
    })
    .catch(e => {
      this.processing = false;
      console.log(e)
    })
   }
  }
}
</script>

<style lang="scss" scoped>

</style>

