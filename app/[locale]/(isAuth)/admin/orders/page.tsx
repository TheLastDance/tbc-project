import { Suspense } from "react";
import { OrdersTable } from "@/components/Tables/OrdersTable/OrdersTable";
import { Loader } from "@/components/Loaders/Loader/Loader";

export default function AdminOrders({ searchParams }: ITableParams) {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <OrdersTable params={searchParams} />
      </Suspense>
    </>
  )
}
