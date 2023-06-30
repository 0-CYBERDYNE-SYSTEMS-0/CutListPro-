import axios from 'axios';

const GPT4_API_URL = 'https://api.openai.com/v4/engines/davinci-codex/completions';

export const getBreakdown = async (userRequest: string) => {
  const response = await axios.post(GPT4_API_URL, {
    prompt: userRequest,
    max_tokens: 200,
  }, {
    headers: {
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
    },
  });

  return response.data.choices[0].text;
};

export const getPriceList = async (supplyList: string) => {
  const response = await axios.post(GPT4_API_URL, {
    prompt: supplyList,
    max_tokens: 200,
  }, {
    headers: {
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
    },
  });

  return response.data.choices[0].text;
};

export const getSketch = async (originalBreakdown: string) => {
  const response = await axios.post(GPT4_API_URL, {
    prompt: originalBreakdown,
    max_tokens: 200,
  }, {
    headers: {
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
    },
  });

  return response.data.choices[0].text;
};

export const getFinalLayout = async (originalBreakdown: string, priceList: string, sketch: string) => {
  const response = await axios.post(GPT4_API_URL, {
    prompt: `${originalBreakdown}\n${priceList}\n${sketch}`,
    max_tokens: 500,
  }, {
    headers: {
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
    },
  });

  return response.data.choices[0].text;
};