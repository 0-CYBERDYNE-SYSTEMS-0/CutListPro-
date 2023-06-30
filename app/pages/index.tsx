```tsx
import { ChakraProvider } from "@chakra-ui/react";
import { BreakdownForm } from "../components/BreakdownForm";
import { PriceList } from "../components/PriceList";
import { ProjectSketch } from "../components/ProjectSketch";
import { FinalLayout } from "../components/FinalLayout";
import { useState } from "react";

export default function Home() {
  const [originalBreakdown, setOriginalBreakdown] = useState(null);
  const [priceList, setPriceList] = useState(null);
  const [projectSketch, setProjectSketch] = useState(null);

  return (
    <ChakraProvider>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Construction Project Planner</h1>
        <BreakdownForm setOriginalBreakdown={setOriginalBreakdown} />
        {originalBreakdown && (
          <PriceList
            originalBreakdown={originalBreakdown}
            setPriceList={setPriceList}
          />
        )}
        {priceList && (
          <ProjectSketch
            originalBreakdown={originalBreakdown}
            setProjectSketch={setProjectSketch}
          />
        )}
        {projectSketch && (
          <FinalLayout
            originalBreakdown={originalBreakdown}
            priceList={priceList}
            projectSketch={projectSketch}
          />
        )}
      </div>
    </ChakraProvider>
  );
}
```