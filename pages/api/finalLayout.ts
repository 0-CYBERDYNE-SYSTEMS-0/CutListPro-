import { NextApiRequest, NextApiResponse } from 'next';
import { getBreakdown } from '../../utils/gpt4';
import { getPriceList } from '../../utils/gpt4';
import { getSketch } from '../../utils/gpt4';

export default async function finalLayout(req: NextApiRequest, res: NextApiResponse) {
  const { projectRequest } = req.body;

  try {
    const originalBreakdown = await getBreakdown(projectRequest);
    const priceList = await getPriceList(originalBreakdown.supplyList);
    const sketch = await getSketch(originalBreakdown);

    const finalLayout = {
      originalBreakdown,
      priceList,
      sketch
    };

    res.status(200).json(finalLayout);
  } catch (error) {
    res.status(500).json({ error: 'Error generating final layout' });
  }
}