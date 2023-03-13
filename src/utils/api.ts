import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://api.weatherapi.com/v1',
  params: {
    key: import.meta.env.VITE_API_KEY
  }
});
