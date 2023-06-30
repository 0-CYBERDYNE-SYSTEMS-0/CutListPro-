import { NextApiRequest, NextApiResponse } from 'next';
import { ProjectSketch } from '../../components/ProjectSketch';
import { originalBreakdown, priceList } from '../../utils/gpt4';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { projectBreakdown } = req.body;

  try {
    const sketch = await ProjectSketch.generate(projectBreakdown, originalBreakdown, priceList);
    return res.status(200).json({ sketch });
  } catch (error) {
    return res.status(500).json({ error: 'Error generating project sketch' });
  }
}