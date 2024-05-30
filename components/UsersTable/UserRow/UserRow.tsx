import "./UserRow.css"
import { EditUserButton } from "@/components/Buttons/EditUserButton/EditUserButton"

export function UserRow({ item }: { item: IUser }) {
  const { given_name, family_name, email, birth_date, role, registration_date } = item;

  const date = new Date(registration_date).toISOString().split('T')[0];

  return <tr className="usersTable_row">
    <td><EditUserButton user={item} /></td>
    <td>{given_name}</td>
    <td>{family_name}</td>
    <td>{email}</td>
    <td>{birth_date !== '""' ? birth_date : null}</td>
    <td>{role}</td>
    <td>{date}</td>
  </tr>
}
