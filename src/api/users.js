import axios from 'axios';

const API_URL = 'https://emayam-todo-backend.onrender.com/api/users';

export const getUsers = () => {
  return axios.get(`${API_URL}`);
};

export const updateUser = (id, data) => {
  return axios.put(`${API_URL}/${id}`, data);
};
