import { TableContainer } from "../TableContainer/TableContainer"
// import { TranslateText } from "@/components/TranslateText/TranslateText"
import { PaginationUI } from "@/components/Pagination/Pagination"
import { getAllOrders } from "@/services/sqlQueries/orders/getAllOrders";
import { OrderRow } from "./OrderRow/OrderRow";

export const revalidate = 0;

export async function OrdersTable({ params }: { params: ITableParams['searchParams'] }) {
  const orders = await getAllOrders() as IOrder[];
  const page = Number(params?.page) || 1;
  const paginatedMessages = orders.slice(10 * (page - 1), page * 10);


  return (
    <div className="table_wrapper">
      <TableContainer>
        <table className="messagesTable">
          <thead>
            <tr>
              <th>Status</th>
              <th>Order</th>
              <th>Cancel</th>
              <th>Order #</th>
              <th>User</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {paginatedMessages.map((item) => <OrderRow item={item} key={item.id} />)}
          </tbody>
        </table>
      </TableContainer>
      <PaginationUI totalPages={orders.length} size={10} />
    </div>
  )
}
