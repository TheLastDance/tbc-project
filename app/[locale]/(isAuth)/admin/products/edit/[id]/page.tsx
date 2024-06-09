import { EditProductForm } from "@/components/Forms/EditProductForm/EditProductForm"
import { getProduct } from "@/services/sqlQueries/products/getProduct"
import { Suspense } from "react"
import { Loader } from "@/components/Loaders/Loader/Loader"

export default async function AdminProductsEdit({ params: { id } }: { params: idParam }) {
  const product = await getProduct(id) as IProductItem;

  return (
    <>
      <Suspense fallback={<Loader />}>
        <section>
          <EditProductForm product={product} />
        </section>
      </Suspense>
    </>
  )
}
