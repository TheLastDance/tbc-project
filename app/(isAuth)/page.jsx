import "./page.css";
import { Products } from "@/components/Products/Products";
import { getAnyData } from "@/services/data-fetch/getAnyData";

export default async function Home() {
  const data = await getAnyData(`https://dummyjson.com/products?limit=0`);

  return (
    <div className="mainPage">
      <Products data={data} />
    </div>
  );
}
