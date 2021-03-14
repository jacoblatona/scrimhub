import {API} from '../../config';

const scrims = {
  namespaced: true,

  state: {
    scrims: [],
    loading: true,
  },
  getters: {
    getScrims(state) {
      return state.scrims;  
    },
    isLoading(state) {
      return state.loading;
    }
    
  },
  actions: {
    loadScrims({ commit }) {
      API
      .get('/scrims/all')
        .then(response => {
          commit('setScrims', response.data.data);
          commit('setIsLoading');
        })
        .catch(e => console.log(e))
    }
  },
  mutations: {
    setScrims(state, payload) {
      state.scrims = payload;
    },
    setIsLoading(state) {
      state.loading = false;
    }
  }
};

export default scrims;
