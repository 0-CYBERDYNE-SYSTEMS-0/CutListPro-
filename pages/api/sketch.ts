import { NextApiRequest, NextApiResponse } from 'next';
import { Sketch } from '../../components/Sketch';
import { gpt4 } from '../../utils/gpt4';

export default async function sketch(req: NextApiRequest, res: NextApiResponse) {
  const { originalBreakdown, priceList } = req.body;

  try {
    const sketchPrompt = `Create a detailed sketch of a construction project based on the following breakdown and price list: ${originalBreakdown} ${priceList}`;
    const sketchData = await gpt4(sketchPrompt);

    const sketch: Sketch = {
      sketchUrl: sketchData.choices[0].text.trim(),
    };

    res.status(200).json(sketch);
  } catch (error) {
    res.status(500).json({ error: 'Error generating sketch' });
  }
}