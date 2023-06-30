```typescript
import axios from 'axios';

const GPT4_API = process.env.GPT4_API;
const GPT4_KEY = process.env.GPT4_KEY;

export const getBreakdown = async (projectRequest: string) => {
  try {
    const response = await axios.post(
      `${GPT4_API}/v1/engines/davinci-codex/completions`,
      {
        prompt: projectRequest,
        max_tokens: 1000,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${GPT4_KEY}`
        }
      }
    );
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error(error);
  }
};

export const getPriceList = async (supplyList: string) => {
  try {
    const response = await axios.post(
      `${GPT4_API}/v1/engines/davinci-codex/completions`,
      {
        prompt: supplyList,
        max_tokens: 1000,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${GPT4_KEY}`
        }
      }
    );
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error(error);
  }
};

export const getFinalLayout = async (originalBreakdown: string, priceList: string, projectSketch: string) => {
  try {
    const response = await axios.post(
      `${GPT4_API}/v1/engines/davinci-codex/completions`,
      {
        prompt: `${originalBreakdown}\n${priceList}\n${projectSketch}`,
        max_tokens: 1000,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${GPT4_KEY}`
        }
      }
    );
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error(error);
  }
};
```