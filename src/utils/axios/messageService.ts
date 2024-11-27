

import axios from 'axios';

const API_BASE_URL = process.env.BACKEND_URL;

export const createMessage = async (data: {
  full_names: string;
  email: string;
  telephone: string;
  message: string;
}) => {
  try {
    const response = await axios.post("https://ecomama-be.onrender.com/api/messages", data);
    return response.data;
  } catch (error) {
    console.error('Error creating message:', error);
    throw error;
  }
};
