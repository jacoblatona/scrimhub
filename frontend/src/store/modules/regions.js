import {API} from '../../config';

const regions = {
  namespaced: true,
  state: {
    regions: []
  },
  getters: {
    getRegions(state) {
      return state.regions;
    }
  },
  actions: {
    loadRegions({commit}) {
    API
    .get('/regions/all')
        .then(response => {
          commit('setRegions', response.data.data)
        })
        .catch(e => console.log(e))
    }
  },
  mutations: {
    setRegions(state, payload) {
      state.regions = payload;
    }
  }
};

export default regions;
