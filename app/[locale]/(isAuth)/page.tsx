import "./page.css";
import { Products } from "@/components/Products/Products";


export default async function Home({ searchParams }: IProductParams) {
  return (
    <div className="mainPage">
      <Products params={searchParams} />
    </div>
  );
}
