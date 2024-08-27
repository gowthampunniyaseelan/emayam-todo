import axios from 'axios';

const API_URL = 'https://emayam-todo-backend.onrender.com/api/auth';

export const login = async (email, password) => {
    try {
    const res = await axios.post(`${API_URL}/login`, { email, password });
    alert("Login successfully");
    return res;
  } catch (err) {
    alert("Something wrong Check your email or password");
  }
};

export const register = async (username, email, password,role) => {
    try {
    const res = await axios.post(`${API_URL}/register`, { username, email, password, role });
    alert("Registered successfully");
    return res;
  } catch (err) {
    alert("Email already exist please login");
  }
   
};
