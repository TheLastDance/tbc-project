import { Suspense } from "react";
import { Products } from "@/components/Products/Products";
import { Loader } from "@/components/Loaders/Loader/Loader";
import { GlithHoverLink } from "@/components/UI/Links/GlithHoverLink";


export default function AdminProducts({ searchParams }: IProductParams) {

  return (
    <>
      <Suspense fallback={<Loader />}>
        <div>
          <GlithHoverLink href="/admin/products/new" translationKey="products.addNew" />
          <Products params={searchParams} admin />
        </div>
      </Suspense>
    </>
  )
}
