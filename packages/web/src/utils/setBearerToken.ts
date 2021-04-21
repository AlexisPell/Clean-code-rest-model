import axios from 'axios';

export const setBearerToken = () => {
  if (localStorage.token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.token}`;
  }
  if (!localStorage.token) {
    delete axios.defaults.headers.common['Authorization'];
  }
};
