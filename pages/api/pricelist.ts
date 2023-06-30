import { NextApiRequest, NextApiResponse } from 'next';
import { getPriceList } from '../../utils/gpt4';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { supplyList } = req.body;

  try {
    const priceList = await getPriceList(supplyList);
    res.status(200).json({ priceList });
  } catch (error) {
    res.status(500).json({ error: 'Error generating price list' });
  }
}