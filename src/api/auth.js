import axios from 'axios';

const API_URL = 'https://emayam-todo-backend.onrender.com/api/auth';

export const login = (email, password) => {
  return axios.post(`${API_URL}/login`, { email, password });
};

export const register = (username, email, password,role) => {
  return axios.post(`${API_URL}/register`, { username, email, password , role});
};
