```typescript
import { NextApiRequest, NextApiResponse } from 'next';
import { getBreakdown } from '../../utils/gpt4';

export default async function breakdown(req: NextApiRequest, res: NextApiResponse) {
  const { project } = req.body;

  try {
    const originalBreakdown = await getBreakdown(project);

    res.status(200).json({ originalBreakdown });
  } catch (error) {
    res.status(500).json({ error: 'Error in breaking down the project' });
  }
}
```