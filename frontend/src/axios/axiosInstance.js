// axiosInstance.js
import axios from 'axios';
import { store } from '../Redux/Store';

const instance = axios.create({
  baseURL: 'http://localhost:8080', // Set base URL for your backend API
  timeout: 10000, // Set timeout for requests (optional)
  headers: {
    'Content-Type': 'application/json', // Set default headers (optional)
  },
});

instance.interceptors.request.use(
  (config) => {
    const state = store.getState(config);
    const token = state.auth.auth.token;
  console.log(token);

    if(token) {
      config.headers['Authorization'] = `Bearer ${token}`;
      
    }
    return config;
  },
  (error)=>{
    return Promise.reject(error)
  }
)

export default instance;
