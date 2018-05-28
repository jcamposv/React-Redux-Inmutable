import axios from 'axios';

export default axios.create({
  baseURL: '',
  headers: {
    Authorization: localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : '',
  },
});
