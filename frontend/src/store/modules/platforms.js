import {API} from '../../config';

export default {
  namespaced: true,
  state: {
    platforms: []
  },
  getters: {
    getPlatforms(state) {
      return state.platforms;
    }
  },
  actions: {
    loadPlatforms({commit}){
        API 
        .get('/platforms/all')
        .then((response) => {
            commit('setPlatforms', response.data.data);
        })
        .catch(e => console.log(e))
      
    }
  },
  mutations: {
    setPlatforms(state, payload) {
      state.platforms = payload;
    }
  }
};
