<template>
  <div id="app" v-if="!authLoading && !scrimsLoading && regions && games && platforms">
      <Navbar/>
      <b-container fluid="xl" class="pt-5">
      <router-view></router-view>
    </b-container>
  </div>
  <div v-else>
    <div class="loader"><i class="fas fa-atom fa-spin text-primary"></i></div>
  </div>
</template>

<script>

import Navbar from './components/Navbar';
import { mapGetters } from 'vuex';

export default {
  created() {
    this.$store.dispatch('auth/checkAuth');
    this.$store.dispatch('games/loadGames');
    this.$store.dispatch('platforms/loadPlatforms');
    this.$store.dispatch('regions/loadRegions');
    this.$store.dispatch('scrims/loadScrims');
  },
  data() {
    return {
      
    }
  },

  computed: {
    ...mapGetters({
        games: 'games/getGames',
        platforms: 'platforms/getPlatforms',
        regions: 'regions/getRegions',
        authLoading: 'auth/isLoading',
        scrimsLoading: 'scrims/isLoading'
      })
  },

  components: {
    Navbar,
  }
}
</script>

<style lang="scss">
  @import 'node_modules/bootstrap/scss/bootstrap.scss';
  @import 'node_modules/bootstrap-vue/src/index.scss';
  @import './assets/sass/custom.scss';
  @import '~pretty-checkbox/src/pretty-checkbox.scss';
</style>
