import axios from 'axios';

export interface ApiError {
  message: string;
  status: string;
}

const api = axios.create({
  baseURL: '/api',
  withCredentials: true,
});

export default api;
