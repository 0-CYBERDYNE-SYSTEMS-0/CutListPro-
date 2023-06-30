```typescript
import { NextApiRequest, NextApiResponse } from 'next';
import { getImageGeneration } from '../../utils/stableDiffusion';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { originalBreakdown } = req.body;

  try {
    const imageGenerationPrompt = `Create a highly detailed sketch of the construction project based on the following breakdown: ${originalBreakdown}`;
    const image = await getImageGeneration(imageGenerationPrompt);

    res.status(200).json({ image });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate image' });
  }
}
```