import axios from 'axios';

export const setHttpToken = (token) => {
    if (!token) {
      axios.defaults.headers.common['Authorization'] = null;
    }
  
    localStorage.setItem('authToken', token)
    axios.defaults.headers.common['Authorization'] = token
  };