import { Order } from "./Order/Order"
import { getUserOrders } from "@/services/sqlQueries/orders/getUserOrders";
import { PaginationUI } from "../Pagination/Pagination";

export const revalidate = 0;

export async function OrdersList({ page }: { page: number }) {
  const orders = await getUserOrders() as IOrder[];
  const paginatedOrders = orders.slice(10 * (page - 1), page * 10);

  return (
    <ul>
      {paginatedOrders.map(item => <li key={item.id}>
        <Order item={item} />
      </li>)}
      <PaginationUI totalPages={orders.length} size={10} />
    </ul>
  )
}
