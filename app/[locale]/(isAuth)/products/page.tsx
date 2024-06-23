import { Products } from "@/components/Products/Products";
import SliderProducts from "@/components/Sliders/SliderProducts/SliderProducts";
import { Suspense } from "react";
import { ProductsListSkeleton } from "@/components/Loaders/ProductsListSkeleton/ProductsListSkeleton";


export default async function ProductsPage({ searchParams }: IProductParams) {

  return (
    <>
      <SliderProducts />
      <Suspense fallback={<ProductsListSkeleton />}>
        <Products params={searchParams} />
      </Suspense>
    </>
  );
}
