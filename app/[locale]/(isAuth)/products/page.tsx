import { Products } from "@/components/Products/Products";
import SliderProducts from "@/components/Sliders/SliderProducts/SliderProducts";

export default async function ProductsPage({ searchParams }: IProductParams) {

  return (
    <>
      <SliderProducts />
      <Products params={searchParams} />
    </>
  );
}
