import { EditProductForm } from "@/components/Forms/EditProductForm/EditProductForm"
import { getProduct } from "@/services/sqlQueries/products/getProduct"
import { Suspense } from "react"
import { Loader } from "@/components/Loaders/Loader/Loader"
import { NotFound } from "@/components/NotFound/NotFound"

export default async function AdminProductsEdit({ params: { id } }: { params: idParam }) {
  const product = await getProduct(id) as IProductItem;

  if (!product?.id) return <NotFound />;

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
