import { OrdersList } from "@/components/OrdersList/OrdersList"
import { Loader } from "@/components/Loaders/Loader/Loader"
import { Suspense } from "react"



export default function Orders({ searchParams }: IOrderParams) {
  const page = Number(searchParams?.page) || 1;

  return (
    <>
      <Suspense fallback={<Loader />}>
        <OrdersList page={page} />
      </Suspense>
    </>
  )
}
