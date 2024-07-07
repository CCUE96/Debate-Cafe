import axios from 'axios';

export const fetchGeminiData = async (params) => {
  try {
    const response = await axios.post('/api/proxy', params, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data from Gemini AI:', error);
    return null;
  }
};