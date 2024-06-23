import { Suspense } from "react";
import { Products } from "@/components/Products/Products";
import { ProductsListSkeleton } from "@/components/Loaders/ProductsListSkeleton/ProductsListSkeleton";
import { GlithHoverLink } from "@/components/UI/Links/GlithHoverLink";


export default function AdminProducts({ searchParams }: IProductParams) {

  return (
    <>
      <div>
        <GlithHoverLink href="/admin/products/new" translationKey="products.addNew" />
        <Suspense fallback={<ProductsListSkeleton />}>
          <Products params={searchParams} admin />
        </Suspense>
      </div>
    </>
  )
}
