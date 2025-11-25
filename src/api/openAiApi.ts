import axios from 'axios';

export const openAiApi = axios.create({
  baseURL: 'https://api.openai.com/v1/chat/completions',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
  },
});
