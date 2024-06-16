import { GlithHoverLink } from "@/components/UI/Links/GlithHoverLink";

export function MessageRow({ item }: { item: IMessage }) {
  const { firstname, lastname, tel, email, added_on, body } = item;
  const utcDate = new Date(added_on).toLocaleDateString();

  return (
    <tr>
      <td>
        <GlithHoverLink
          href={`mailto:${email}?subject=Answer on your question`}
          translationKey="table.answer"
        />
      </td>
      <td>{firstname}</td>
      <td>{lastname}</td>
      <td>{email}</td>
      <td>{tel}</td>
      <td className="messagesTable_text">{body}</td>
      <td>{utcDate}</td>
    </tr>
  )
}
