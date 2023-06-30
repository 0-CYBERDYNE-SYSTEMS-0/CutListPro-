import axios from 'axios';

export async function generateImage(prompt: string) {
  const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
    prompt: `Create a detailed sketch of the completed project based on the following description: ${prompt}`,
    max_tokens: 100,
    temperature: 0.5,
  }, {
    headers: {
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
    },
  });

  const imagePrompt = response.data.choices[0].text.trim();

  const diffusionResponse = await axios.post('https://api.openai.com/v1/images', {
    prompt: imagePrompt,
    max_tokens: 100,
    temperature: 0.5,
  }, {
    headers: {
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
    },
  });

  return diffusionResponse.data;
}