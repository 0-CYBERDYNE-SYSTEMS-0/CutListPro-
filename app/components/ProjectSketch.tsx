```tsx
import { Box, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ProjectSketch as ProjectSketchType } from "../utils/diffusion";

interface ProjectSketchProps {
  originalBreakdown: string;
}

const ProjectSketch: React.FC<ProjectSketchProps> = ({ originalBreakdown }) => {
  const [projectSketch, setProjectSketch] = useState<ProjectSketchType | null>(null);

  useEffect(() => {
    fetch("/api/diffusion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: originalBreakdown }),
    })
      .then((res) => res.json())
      .then((data) => {
        setProjectSketch(data);
      });
  }, [originalBreakdown]);

  return (
    <Box id="project-sketch" p={5} shadow="md" borderWidth="1px">
      {projectSketch ? (
        <Image
          boxSize="lg"
          objectFit="cover"
          src={projectSketch.imageURL}
          alt="Project Sketch"
        />
      ) : (
        <p>Loading...</p>
      )}
    </Box>
  );
};

export default ProjectSketch;
```