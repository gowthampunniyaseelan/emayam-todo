import axios from 'axios';

const API_URL = 'https://emayam-todo-backend.onrender.com/api/auth';

export const login = (email, password) => {
    axios.post(`${API_URL}/login`, { email, password }).then((res)=>{
    alert("Login successfully")
    return res
    }).catch((err)=>{
      alert("Check your email or password")
    })
};

export const register = (username, email, password,role) => {
    axios.post(`${API_URL}/register`, { username, email, password , role}).then((res)=>{
      alert("Registered successfully")
      return res
    }).catch((err)=>{
      alert("Email already exist please login")
    })
   
};
