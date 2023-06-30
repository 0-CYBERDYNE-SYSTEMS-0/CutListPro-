import { Box } from "@chakra-ui/react";
import { ProjectBreakdown } from "../components/ProjectBreakdown";
import { PriceList } from "../components/PriceList";
import { ProjectSketch } from "../components/ProjectSketch";

interface FinalLayoutProps {
  originalBreakdown: any;
  priceList: any;
  projectSketch: any;
}

export const FinalLayout: React.FC<FinalLayoutProps> = ({ originalBreakdown, priceList, projectSketch }) => {
  return (
    <Box id="final-layout">
      <ProjectBreakdown breakdown={originalBreakdown} />
      <PriceList priceList={priceList} />
      <ProjectSketch sketch={projectSketch} />
    </Box>
  );
};