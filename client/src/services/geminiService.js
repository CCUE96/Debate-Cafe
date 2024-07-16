import axios from 'axios';

export const fetchGeminiData = async (endpoint, data) => {
  try {
    const response = await axios.post(`/api/proxy`, data);
    return response.data;
  } catch (error) {
    console.error('Error fetching Gemini data:', error);
    return null;
  }
};