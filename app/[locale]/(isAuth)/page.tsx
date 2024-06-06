import "./page.css";
import { Products } from "@/components/Products/Products";
import { getAnyData } from "@/services/data-fetch/getAnyData";


export default async function Home({ searchParams }: IProductParams) {
  const data = await getAnyData<{ products: IProductItem[] }>(`https://dummyjson.com/products`);

  return (
    <div className="mainPage">
      <Products data={data} params={searchParams} />
    </div>
  );
}
