import "./UsersTable.css";
import { getAnyData } from "@/services/data-fetch/getAnyData";
import { UserRow } from "./UserRow/UserRow";
import { TranslateTextServer } from "../../TranslateText/TranslateTextServer";
import { BASE_URL } from "@/services/constants";
import { TableContainer } from "../TableContainer/TableContainer";

export async function UsersTable() {
  const { users: { rows } } = await getAnyData<IUserDatabase>(`${BASE_URL}/api/get-users`);

  return (
    <TableContainer>
      <table>
        <thead>
          <tr>
            <th><TranslateTextServer translationKey="edit" /></th>
            <th><TranslateTextServer translationKey="firstName" /></th>
            <th><TranslateTextServer translationKey="lastName" /></th>
            <th><TranslateTextServer translationKey="email" /></th>
            <th><TranslateTextServer translationKey="birthDate" /></th>
            <th><TranslateTextServer translationKey="role" /></th>
            <th><TranslateTextServer translationKey="regDate" /></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((item) => <UserRow item={item} key={item.id} />)}
        </tbody>
      </table>
    </TableContainer>
  )
}
