// src/services/axiosInstance.js
import axios from 'axios';

// Axios dengan interceptor (untuk endpoint yang butuh token)
export const apiWithAuth = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://notes-143-be-353267785618.us-central1.run.app',
  headers: {
    'Content-Type': 'application/json',
  },
});

apiWithAuth.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
    console.log('🔐 Mengirim token:', token); // 
  }
  return config;
}, (error) => Promise.reject(error));

// Axios tanpa interceptor (untuk login/register)
export const apiPublic = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://notes-143-be-353267785618.us-central1.run.app',
  headers: {
    'Content-Type': 'application/json',
  },
});
