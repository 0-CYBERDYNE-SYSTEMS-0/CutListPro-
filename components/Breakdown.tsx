```tsx
import { Box, Heading, List, ListItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getBreakdown } from "../utils/gpt4";

interface BreakdownProps {
  userRequest: string;
}

const Breakdown: React.FC<BreakdownProps> = ({ userRequest }) => {
  const [breakdown, setBreakdown] = useState({
    toolsNeeded: [],
    supplyList: [],
    cutList: [],
    instructions: [],
  });

  useEffect(() => {
    const fetchBreakdown = async () => {
      const data = await getBreakdown(userRequest);
      setBreakdown(data);
    };

    fetchBreakdown();
  }, [userRequest]);

  return (
    <Box id="breakdown-container">
      <Heading>Original Breakdown</Heading>
      <Heading size="md">Tools Needed</Heading>
      <List>
        {breakdown.toolsNeeded.map((tool, index) => (
          <ListItem key={index}>{tool}</ListItem>
        ))}
      </List>
      <Heading size="md">Supply List</Heading>
      <List>
        {breakdown.supplyList.map((supply, index) => (
          <ListItem key={index}>{supply}</ListItem>
        ))}
      </List>
      <Heading size="md">Cut List</Heading>
      <List>
        {breakdown.cutList.map((cut, index) => (
          <ListItem key={index}>{cut}</ListItem>
        ))}
      </List>
      <Heading size="md">Instructions</Heading>
      <List>
        {breakdown.instructions.map((instruction, index) => (
          <ListItem key={index}>{instruction}</ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Breakdown;
```