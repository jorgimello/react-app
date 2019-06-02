import axios from 'axios'

const api = axios.create({
  baseURL: 'https://react-app-omnistack-backend.herokuapp.com',
});

export default api;