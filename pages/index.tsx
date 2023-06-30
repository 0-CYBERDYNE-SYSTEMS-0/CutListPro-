```tsx
import { NextPage } from 'next';
import { Box } from '@chakra-ui/react';
import { Breakdown } from '../components/Breakdown';
import { PriceList } from '../components/PriceList';
import { Sketch } from '../components/Sketch';
import { FinalLayout } from '../components/FinalLayout';

const Home: NextPage = () => {
  return (
    <Box>
      <Breakdown id="breakdown-container" />
      <PriceList id="pricelist-container" />
      <Sketch id="sketch-container" />
      <FinalLayout id="finalLayout-container" />
    </Box>
  );
};

export default Home;
```