import "./UserRow.css"
import { EditUserButton } from "@/components/Buttons/EditUserButton/EditUserButton"
import { DeleteUserButton } from "@/components/Buttons/DeleteUserButton/DeleteUserButton"

export function UserRow({ item }: { item: IUser }) {
  const { name, email, birthDate } = item;

  return <tr className="usersTable_row">
    <td>{name}</td>
    <td>{email}</td>
    <td>{birthDate}</td>
    <td><EditUserButton user={item} /></td>
    <td><DeleteUserButton id={item.id} /></td>
  </tr>
}
