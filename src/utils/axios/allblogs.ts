import axios from 'axios';

const API_BASE_URL = process.env.BACKEND_URL;

export const getAllBlogs = async () => {
    try {
        const response = await axios.get("https://ecomama-be.onrender.com/api/hubs");
        return response.data;
      } catch (error) {
        console.error('Error creating message:', error);
        throw error;
      }
    
}
 
 
  
