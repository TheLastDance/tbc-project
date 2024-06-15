import { Order } from "@/components/OrdersList/Order/Order"
import { getOrder } from "@/services/sqlQueries/orders/getOrder"
import { Suspense } from "react";
import { Loader } from "@/components/Loaders/Loader/Loader";

export default async function AdminOrderSingle({ params: { id } }: { params: { id: number } }) {
  const order = await getOrder(id) as IOrder;

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Order item={order} admin />
      </Suspense>
    </>
  )
}
