import { Box, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Sketch = () => {
  const [sketch, setSketch] = useState<string | null>(null);

  useEffect(() => {
    const fetchSketch = async () => {
      const res = await fetch("/api/sketch");
      const data = await res.json();
      setSketch(data.sketch);
    };

    fetchSketch();
  }, []);

  return (
    <Box id="sketch-container">
      {sketch ? (
        <Image src={sketch} alt="Project Sketch" boxSize="500px" objectFit="cover" />
      ) : (
        <p>Loading sketch...</p>
      )}
    </Box>
  );
};

export default Sketch;