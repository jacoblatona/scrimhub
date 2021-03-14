import Vue from 'vue'
import Vuex from 'vuex'
import games from './modules/games'
import platforms from './modules/platforms'
import auth from './modules/auth'
import regions from './modules/regions'
import scrims from './modules/scrims'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    games,
    platforms,
    auth,
    regions,
    scrims
  },
});

export default store;