import { Box, List, ListItem, Link, Text } from "@chakra-ui/react";
import { PriceList } from "../utils/priceFinder";

interface PriceListProps {
  priceList: PriceList;
}

const PriceListComponent: React.FC<PriceListProps> = ({ priceList }) => {
  return (
    <Box id="price-list">
      <Text fontSize="xl" fontWeight="bold">Price List</Text>
      <List spacing={3}>
        {priceList.map((item, index) => (
          <ListItem key={index}>
            <Text>{item.name}</Text>
            <Text>Lowest Price: {item.lowestPrice}</Text>
            <Link href={item.link} isExternal>Buy Here</Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default PriceListComponent;