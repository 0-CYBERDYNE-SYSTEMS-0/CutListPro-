import axios from 'axios';

interface SupplyItem {
  name: string;
  quantity: number;
}

interface PriceItem {
  name: string;
  quantity: number;
  price: number;
  link: string;
}

export async function getPriceList(supplyList: SupplyItem[], location: string): Promise<PriceItem[]> {
  const priceList: PriceItem[] = [];

  for (const item of supplyList) {
    const response = await axios.get(`https://api.pricefinder.com/search?query=${item.name}&location=${location}`);
    const data = response.data;

    if (data && data.items && data.items.length > 0) {
      const cheapestItem = data.items.reduce((prev, curr) => prev.price < curr.price ? prev : curr);
      priceList.push({
        name: item.name,
        quantity: item.quantity,
        price: cheapestItem.price,
        link: cheapestItem.link
      });
    }
  }

  return priceList;
}