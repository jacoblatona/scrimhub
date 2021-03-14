import {API} from '../../config';

const games = {
  namespaced: true,
  state: {
    games: null
  },
  mutations: {
      setGames(state, payload) {
            state.games = payload
      }
  },
  actions: {
      loadGames({commit}){
        API
        .get('/games/all')
        .then((response) => {
            commit('setGames', response.data.data);
        })
        .catch(e => console.log(e))
      
    }
  },
  
  getters: {
      getGames(state) {
          return state.games
    }
  }
  
}

export default games