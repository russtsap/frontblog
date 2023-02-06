import axios from 'axios';

// We should use .env file to set the API key, but for now we're not using it.
const instance = axios.create({
  baseURL: 'https://blog-app-rus.herokuapp.com/',
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem('token');
  return config;
});

export default instance;
