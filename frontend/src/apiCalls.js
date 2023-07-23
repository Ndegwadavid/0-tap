import axios from 'axios';

const API_URL = '/api/users';

export function registerUser(name, email, tapCode) {
  return axios.post(`${API_URL}/register`, {
    name,
    email,
    tapCode
  });
}

export function loginUser(email, tapCode) {
  return axios.post(`${API_URL}/login`, {
    email, 
    tapCode
  });
}