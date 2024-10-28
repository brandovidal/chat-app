'use server'

import axios from 'axios';

const API_URL = 'http://localhost:5000/auth';

export const register = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/register`, { username, password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
