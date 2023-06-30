```typescript
import axios from 'axios';

const GPT4_API_URL = 'https://api.openai.com/v4/engines/davinci-codex/completions';

export const handleProjectRequest = async (userRequest: string): Promise<string> => {
  const response = await axios.post(GPT4_API_URL, {
    prompt: userRequest,
    max_tokens: 1000,
  }, {
    headers: {
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json'
    }
  });

  return response.data.choices[0].text;
}

export const getProjectBreakdown = async (userRequest: string): Promise<string> => {
  const response = await axios.post(GPT4_API_URL, {
    prompt: `Breakdown the following construction project: ${userRequest}`,
    max_tokens: 1000,
  }, {
    headers: {
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json'
    }
  });

  return response.data.choices[0].text;
}

export const getPriceList = async (supplyList: string[]): Promise<string> => {
  const response = await axios.post(GPT4_API_URL, {
    prompt: `Find the lowest price for the following supplies within a certain geographical area: ${supplyList.join(', ')}`,
    max_tokens: 1000,
  }, {
    headers: {
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json'
    }
  });

  return response.data.choices[0].text;
}

export const getProjectSketch = async (projectBreakdown: string): Promise<string> => {
  const response = await axios.post(GPT4_API_URL, {
    prompt: `Create an image generation prompt with the following project breakdown: ${projectBreakdown}`,
    max_tokens: 1000,
  }, {
    headers: {
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json'
    }
  });

  return response.data.choices[0].text;
}

export const getFinalLayout = async (originalBreakdown: string, priceList: string, projectSketch: string): Promise<string> => {
  const response = await axios.post(GPT4_API_URL, {
    prompt: `Bring together the following: original breakdown - ${originalBreakdown}, price list - ${priceList}, and project sketch - ${projectSketch}`,
    max_tokens: 1000,
  }, {
    headers: {
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json'
    }
  });

  return response.data.choices[0].text;
}
```