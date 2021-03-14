import {API} from '../../config';
import {setHttpToken} from '../../helpers';

const auth = {
  namespaced: true,
  state: {
      authenticatedUser: null,
      errors: null,
      loading: true
  },
  mutations: {
      setAuthenticatedUser(state, payload) {
          state.authenticatedUser = payload;
      },
      setErrors(state, payload) {
          state.errors = payload;
      },
      setIsLoading(state, payload) {
          state.loading = payload;
      }
  },
    actions: {
        login({ commit }, payload) {
            
            return new Promise((resolve, reject) => {
          
            API
            .post('/login', payload)
                .then(response => {
                    
                    setHttpToken(response.data.authToken)
                    commit('setAuthenticatedUser', response.data.user)
                    resolve(response)
                })
                .catch(error => {
                    commit('setErrors', error.response.data.message)
                    commit('setAuthenticatedUser', null);
                    localStorage.removeItem('authToken')
                    reject(error)
                })
            })
        },

        register({ commit }, payload) {
            
            return new Promise((resolve, reject) => {
          
            API
            .post('/register', payload)
                .then(response => {
                    
                    setHttpToken(response.data.authToken)
                    commit('setAuthenticatedUser', response.data.user)
                    resolve(response)
                })
                .catch(error => {
                    commit('setErrors', error.response.data.message)
                    commit('setAuthenticatedUser', null);
                    localStorage.removeItem('authToken')
                    reject(error)
                })
            })
        },

        checkAuth({ commit }) {
            const token = localStorage.getItem('authToken');
            if (token) {
                
                API
                .get('/user')
                    .then(response => {
                            commit('setAuthenticatedUser', response.data)
                        })
                    .catch(() => {
                        
                            commit('setAuthenticatedUser', null);
                            localStorage.removeItem('authToken');
                        })
                
            }

            commit('setIsLoading', false);
        },

        logout({ commit }) {
            
            return new Promise((resolve, reject) => {
                API
                .get('/logout')
                    .then((response) => {
                        commit('setAuthenticatedUser', null);
                        localStorage.removeItem('authToken');
                        resolve(response);
                    })
                    .catch(error => {
                        commit('setErrors', error)
                        reject(error);
                    })
            })
      }
  },
  
  getters: {
      getErrors(state) {
          return state.errors;
      },
      getAuthenticatedUser(state) {
          return state.authenticatedUser;
      },
      isLoading(state) {
          return state.loading;
      }
  }
  
}

export default auth