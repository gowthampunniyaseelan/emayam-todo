// src/api/axiosConfig.js

import axios from 'axios';

// Create an instance of axios
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/api', // Your API base URL
});

// Set the authorization header for all requests if a token is available
axiosInstance.interceptors.request.use(
  (config) => {
    console.log(config);
    
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
