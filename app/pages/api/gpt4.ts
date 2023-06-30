import { NextApiRequest, NextApiResponse } from 'next';
import { handleProjectRequest, getProjectBreakdown, getPriceList, getProjectSketch, getFinalLayout } from '../../utils/gpt4';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const userRequest = req.body;
    try {
      const originalBreakdown = await handleProjectRequest(userRequest);
      const supplyList = originalBreakdown.supplyList;
      const priceList = await getPriceList(supplyList);
      const projectSketch = await getProjectSketch(originalBreakdown);
      const finalLayout = await getFinalLayout(originalBreakdown, priceList, projectSketch);
      res.status(200).json({ finalLayout });
    } catch (error) {
      res.status(500).json({ error: 'Error processing request' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}