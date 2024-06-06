import "./MessagesTable.css"
import { TableContainer } from "../TableContainer/TableContainer"
import { TranslateText } from "@/components/TranslateText/TranslateText"
import { MessageRow } from "./MessageRow/MessageRow"
import { getMessages } from "@/services/sqlQueries/contact/getMessages"
import { PaginationUI } from "@/components/Pagination/Pagination"

export const revalidate = 0;

export async function MessagesTable({ params }: { params: ITableParams['searchParams'] }) {
  const messages = await getMessages() as IMessage[];
  const page = Number(params?.page) || 1;
  const paginatedMessages = messages.slice(10 * (page - 1), page * 10);

  return (
    <div className="table_wrapper">
      <TableContainer>
        <table className="messagesTable">
          <thead>
            <tr>
              <th><TranslateText translationKey="table.answer" /></th>
              <th><TranslateText translationKey="firstName" /></th>
              <th><TranslateText translationKey="lastName" /></th>
              <th><TranslateText translationKey="email" /></th>
              <th><TranslateText translationKey="form.label.phoneNumber" /></th>
              <th><TranslateText translationKey="table.question" /></th>
              <th><TranslateText translationKey="table.date" /></th>
            </tr>
          </thead>
          <tbody>
            {paginatedMessages.map((item) => <MessageRow item={item} key={item.id} />)}
          </tbody>
        </table>
      </TableContainer>
      <PaginationUI totalPages={messages.length} size={10} />
    </div>
  )
}
