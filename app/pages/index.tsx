import { ChakraProvider } from "@chakra-ui/react";
import { ProjectRequestForm } from "../components/ProjectRequestForm";
import { ProjectBreakdown } from "../components/ProjectBreakdown";
import { PriceList } from "../components/PriceList";
import { ProjectSketch } from "../components/ProjectSketch";
import { FinalLayout } from "../components/FinalLayout";
import { useState } from "react";

export default function Home() {
  const [originalBreakdown, setOriginalBreakdown] = useState(null);
  const [priceList, setPriceList] = useState(null);
  const [projectSketch, setProjectSketch] = useState(null);

  const handleProjectRequest = async (request) => {
    const breakdown = await getProjectBreakdown(request);
    setOriginalBreakdown(breakdown);
    const prices = await getPriceList(breakdown.supplyList);
    setPriceList(prices);
    const sketch = await getProjectSketch(breakdown);
    setProjectSketch(sketch);
  };

  return (
    <ChakraProvider>
      <ProjectRequestForm onProjectRequest={handleProjectRequest} />
      {originalBreakdown && <ProjectBreakdown breakdown={originalBreakdown} />}
      {priceList && <PriceList prices={priceList} />}
      {projectSketch && <ProjectSketch sketch={projectSketch} />}
      {originalBreakdown && priceList && projectSketch && (
        <FinalLayout
          breakdown={originalBreakdown}
          prices={priceList}
          sketch={projectSketch}
        />
      )}
    </ChakraProvider>
  );
}