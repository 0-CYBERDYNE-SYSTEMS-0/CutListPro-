```tsx
import { Box, Heading, Text, Image } from "@chakra-ui/react";
import { FC } from "react";

interface FinalLayoutProps {
  originalBreakdown: string;
  priceList: string;
  projectSketch: string;
}

const FinalLayout: FC<FinalLayoutProps> = ({ originalBreakdown, priceList, projectSketch }) => {
  return (
    <Box>
      <Heading as="h2" size="lg">Final Project Layout</Heading>
      <Box my={4}>
        <Heading as="h3" size="md">Original Breakdown</Heading>
        <Text>{originalBreakdown}</Text>
      </Box>
      <Box my={4}>
        <Heading as="h3" size="md">Price List</Heading>
        <Text>{priceList}</Text>
      </Box>
      <Box my={4}>
        <Heading as="h3" size="md">Project Sketch</Heading>
        <Image src={projectSketch} alt="Project Sketch" />
      </Box>
    </Box>
  );
};

export default FinalLayout;
```