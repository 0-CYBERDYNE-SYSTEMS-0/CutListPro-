import { Box, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface ProjectSketchProps {
  originalBreakdown: string;
}

const ProjectSketch: React.FC<ProjectSketchProps> = ({ originalBreakdown }) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      const response = await fetch(`/api/imageGeneration?breakdown=${encodeURIComponent(originalBreakdown)}`);
      const data = await response.json();
      setImageSrc(data.image);
    };

    fetchImage();
  }, [originalBreakdown]);

  return (
    <Box id="projectSketch">
      {imageSrc ? (
        <Image src={imageSrc} alt="Project sketch" />
      ) : (
        <p>Loading project sketch...</p>
      )}
    </Box>
  );
};

export default ProjectSketch;