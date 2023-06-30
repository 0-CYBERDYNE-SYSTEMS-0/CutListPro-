```tsx
import { Box, Heading, List, ListItem } from "@chakra-ui/react";
import { ProjectBreakdown as ProjectBreakdownType } from "../utils/gpt4";

interface ProjectBreakdownProps {
  breakdown: ProjectBreakdownType;
}

const ProjectBreakdown: React.FC<ProjectBreakdownProps> = ({ breakdown }) => {
  return (
    <Box id="project-breakdown">
      <Heading as="h2" size="lg">
        Project Breakdown
      </Heading>
      <Heading as="h3" size="md">
        Tools Needed
      </Heading>
      <List spacing={3}>
        {breakdown.toolsNeeded.map((tool, index) => (
          <ListItem key={index}>{tool}</ListItem>
        ))}
      </List>
      <Heading as="h3" size="md">
        Supply List
      </Heading>
      <List spacing={3}>
        {breakdown.supplyList.map((supply, index) => (
          <ListItem key={index}>{supply}</ListItem>
        ))}
      </List>
      <Heading as="h3" size="md">
        Cut List
      </Heading>
      <List spacing={3}>
        {breakdown.cutList.map((cut, index) => (
          <ListItem key={index}>{cut}</ListItem>
        ))}
      </List>
      <Heading as="h3" size="md">
        Step-by-step Instructions
      </Heading>
      <List spacing={3}>
        {breakdown.instructions.map((instruction, index) => (
          <ListItem key={index}>{instruction}</ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ProjectBreakdown;
```