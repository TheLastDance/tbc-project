import { Products } from "@/components/Products/Products";
import { getAnyData } from "@/services/data-fetch/getAnyData";

export default async function ProductsPage() {
  const data = await getAnyData<{ products: IProductItem[] }>(`https://dummyjson.com/products`);

  return (
    <>
      <Products data={data} />
    </>
  );
}
