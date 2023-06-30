import { Box, Text, VStack } from "@chakra-ui/react";
import React from "react";

interface PriceListProps {
  priceList: {
    item: string;
    price: number;
    link: string;
  }[];
}

const PriceList: React.FC<PriceListProps> = ({ priceList }) => {
  return (
    <VStack spacing={4} align="stretch">
      {priceList.map((item, index) => (
        <Box key={index} p={5} shadow="md" borderWidth="1px">
          <Text fontWeight="bold">{item.item}</Text>
          <Text>Price: ${item.price}</Text>
          <Text>
            Link:{" "}
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.link}
            </a>
          </Text>
        </Box>
      ))}
    </VStack>
  );
};

export default PriceList;