import { Products } from "@/components/Products/Products";
import { getAnyData } from "@/services/data-fetch/getAnyData";

export default async function ProductsPage() {
  const data = await getAnyData<{ products: SingleShopItem[] }>(`https://dummyjson.com/products?limit=0`);

  return (
    <>
      <Products data={data} />
    </>
  );
}
