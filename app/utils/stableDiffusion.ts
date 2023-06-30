```typescript
import axios from 'axios';

export const getImageGeneration = async (originalBreakdown: string) => {
  try {
    const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
      prompt: `Generate a detailed sketch of the construction project based on the following breakdown: ${originalBreakdown}`,
      max_tokens: 100,
      temperature: 0.5,
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    if (response.data.choices && response.data.choices.length > 0) {
      const imagePrompt = response.data.choices[0].text;
      const imageResponse = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
        prompt: `Generate an image from the following description: ${imagePrompt}`,
        max_tokens: 100,
        temperature: 0.5,
      }, {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        }
      });

      if (imageResponse.data.choices && imageResponse.data.choices.length > 0) {
        return imageResponse.data.choices[0].text;
      }
    }

    throw new Error('Failed to generate image');
  } catch (error) {
    console.error(error);
    throw error;
  }
};
```