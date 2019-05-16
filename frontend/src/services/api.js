import axios from 'axios'

const api = axios.create({
  baseURL: 'https://react-app-omnistack.herokuapp.com',
});

export default api;