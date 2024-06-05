import { Products } from "@/components/Products/Products";
import { getAnyData } from "@/services/data-fetch/getAnyData";

export default async function ProductsPage({ searchParams }: { searchParams?: { searchText?: string } }) {
  const data = await getAnyData<{ products: IProductItem[] }>(`https://dummyjson.com/products`);
  const searchText = searchParams?.searchText || '';

  return (
    <>
      <Products data={data} searchText={searchText} />
    </>
  );
}
