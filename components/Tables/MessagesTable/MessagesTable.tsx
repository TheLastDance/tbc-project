import "./MessagesTable.css"
import { TableContainer } from "../TableContainer/TableContainer"
import { TranslateText } from "@/components/TranslateText/TranslateText"
import { MessageRow } from "./MessageRow/MessageRow"

export function MessagesTable({ messages }: { messages: IMessage[] }) {
  return (
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
          {messages.map((item) => <MessageRow item={item} key={item.id} />)}
        </tbody>
      </table>
    </TableContainer>
  )
}
