<template>
  <div>
    <div class="alert alert-primary bg-primary text-center text-white mb-0" style="border:none;border-radius:0;">Laravel + Vue.js + Bootstrap-Vue</div>
      <b-navbar toggleable="lg">
        <b-container fluid="xl">
            <b-navbar-brand to="/" class="px-2 px-md-0">SCRIM <span class="text-primary">HUB</span></b-navbar-brand>

                <b-navbar-toggle target="nav-collapse">
                  <i class="fas fa-bars text-white"></i>
                </b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="mx-auto">
                    <b-nav-item to="/" class="text-primary py-2 py-md-0">HOME</b-nav-item>
                    <b-nav-item to="/games" class="text-primary py-2 py-md-0">GAMES</b-nav-item>
                    <b-nav-item to="/scrims" class="py-2 py-md-0">SCRIMS</b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto" v-if="!authenticatedUser">
                    <b-nav-item v-b-modal.modal-2 class="py-2 py-md-0">REGISTER</b-nav-item>
                    <b-nav-item v-b-modal.modal-1 class="py-2 py-md-0"><i class="far fa-user-circle mr-1"></i> LOGIN</b-nav-item>
                    <Login/>
                    <Register/>
                </b-navbar-nav>
                <b-navbar-nav class="ml-auto" v-else>
                  <b-nav-item-dropdown right>
                    <!-- Using 'button-content' slot -->
                    <template #button-content>
                      <i class="far fa-user-circle mr-1"></i> {{authenticatedUser.name}}
                    </template>
                    <b-dropdown-item @click="submit">Sign Out</b-dropdown-item>
                  </b-nav-item-dropdown>
                </b-navbar-nav>
        </b-collapse>
        </b-container>
    </b-navbar>
  </div>
</template>

<script>
import Login from '../components/Modals/Login';
import Register from '../components/Modals/Register';
import {mapGetters, mapActions} from 'vuex';
import Home from '../views/Home';
export default {
    components: {
      Login,
      Register
    },
    computed: {
      ...mapGetters({
        authenticatedUser: 'auth/getAuthenticatedUser'
      })
    }, 
    methods: {
      ...mapActions({
        logout: 'auth/logout'
      }), 

      submit(){
        this.logout()
        .then(() => {
          this.$router.push(Home)
        });
      }
    }, 
    
}
</script>

<style>

</style>