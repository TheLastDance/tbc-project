import "./OrdersTable.css"
import { TableContainer } from "../TableContainer/TableContainer"
import { PaginationUI } from "@/components/Pagination/Pagination"
import { getAllOrders } from "@/services/sqlQueries/orders/getAllOrders";
import { OrderRow } from "./OrderRow/OrderRow";
import { TranslateText } from "@/components/TranslateText/TranslateText";

export const revalidate = 0;

export async function OrdersTable({ params }: { params: ITableParams['searchParams'] }) {
  const orders = await getAllOrders() as IOrder[];
  const page = Number(params?.page) || 1;
  const paginatedMessages = orders.slice(10 * (page - 1), page * 10);


  return (
    <div className="table_wrapper">
      <TableContainer>
        <table className="ordersTable">
          <thead>
            <tr>
              <th><TranslateText translationKey="order.status" /></th>
              <th><TranslateText translationKey="order.order" /></th>
              <th><TranslateText translationKey="order.cancel" /></th>
              <th><TranslateText translationKey="order.order" /> #</th>
              <th><TranslateText translationKey="order.user" /></th>
              <th><TranslateText translationKey="order.totalPrice" /></th>
              <th><TranslateText translationKey="form.address" /></th>
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
