```typescript
import axios from 'axios';

interface SupplyItem {
  name: string;
  quantity: number;
}

interface PriceListItem {
  name: string;
  quantity: number;
  price: number;
  link: string;
}

export async function getPriceList(supplyList: SupplyItem[], zipCode: string): Promise<PriceListItem[]> {
  const priceList: PriceListItem[] = [];

  for (const item of supplyList) {
    const response = await axios.get(`https://api.homedepot.com/v1/location/${zipCode}/product/${item.name}`);
    const product = response.data;

    priceList.push({
      name: item.name,
      quantity: item.quantity,
      price: product.price * item.quantity,
      link: product.url,
    });
  }

  return priceList;
}
```