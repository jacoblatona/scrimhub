import axios from 'axios'

export const API_URI = process.env.VUE_APP_API_URI;

export const API = axios.create({
    baseURL: API_URI
});