import { NextApiRequest, NextApiResponse } from 'next';
import { getBreakdown } from '../../utils/gpt4';
import { getPriceList } from '../../utils/homeDepotPriceCheck';
import { getImageGeneration } from '../../utils/stableDiffusion';

export default async function finalLayout(req: NextApiRequest, res: NextApiResponse) {
  const { project } = req.body;

  try {
    // Get the original breakdown from GPT-4
    const originalBreakdown = await getBreakdown(project);

    // Get the price list from Home Depot
    const priceList = await getPriceList(originalBreakdown.supplyList);

    // Generate the project sketch
    const projectSketch = await getImageGeneration(originalBreakdown);

    // Combine all the information into a final layout
    const finalLayout = {
      originalBreakdown,
      priceList,
      projectSketch,
    };

    res.status(200).json(finalLayout);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while generating the final layout.' });
  }
}