import { Order } from "@/components/OrdersList/Order/Order"
import { getOrder } from "@/services/sqlQueries/orders/getOrder"
import { Suspense } from "react";
import { Loader } from "@/components/Loaders/Loader/Loader";
import { NotFound } from "@/components/NotFound/NotFound";

export default async function AdminOrderSingle({ params: { id } }: { params: { id: number } }) {
  const order = await getOrder(id) as IOrder;

  if (!order?.id) return <NotFound />;

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Order item={order} admin />
      </Suspense>
    </>
  )
}
