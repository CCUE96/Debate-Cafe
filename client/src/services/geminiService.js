import axios from 'axios';

export const fetchGeminiData = async (endpoint, data) => {
  try {
    console.log('Sending request to OpenAI API with data:', data);
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error('VITE_GEMINI_API_KEY is not defined');
    }
    const response = await axios.post(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`, data, {
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
