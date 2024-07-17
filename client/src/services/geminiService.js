import axios from 'axios';

export const fetchGeminiData = async (endpoint, data) => {
  try {
    console.log('Sending request to OpenAI API with data:', data);
    const response = await axios.post(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('Received response from OpenAI API:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching Gemini data:', error);
    return null;
  }
};
