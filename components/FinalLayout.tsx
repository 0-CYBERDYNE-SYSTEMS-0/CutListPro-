import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Breakdown from "./Breakdown";
import PriceList from "./PriceList";
import Sketch from "./Sketch";

const FinalLayout = () => {
  const [breakdown, setBreakdown] = useState(null);
  const [priceList, setPriceList] = useState(null);
  const [sketch, setSketch] = useState(null);

  useEffect(() => {
    getBreakdown().then((data) => setBreakdown(data));
    getPriceList().then((data) => setPriceList(data));
    getSketch().then((data) => setSketch(data));
  }, []);

  return (
    <Box id="finalLayout-container">
      <Breakdown breakdown={breakdown} />
      <PriceList priceList={priceList} />
      <Sketch sketch={sketch} />
    </Box>
  );
};

async function getBreakdown() {
  const response = await fetch("/api/breakdown");
  const data = await response.json();
  return data;
}

async function getPriceList() {
  const response = await fetch("/api/pricelist");
  const data = await response.json();
  return data;
}

async function getSketch() {
  const response = await fetch("/api/sketch");
  const data = await response.json();
  return data;
}

export default FinalLayout;