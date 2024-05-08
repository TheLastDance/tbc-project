import "./UsersTable.css";

import { getAnyData } from "@/services/data-fetch/getAnyData";
import { UserRow } from "./UserRow/UserRow";
import { TranslateTextServer } from "../TranslateText/TranslateTextServer";
import { BASE_URL } from "@/services/constants";

export async function UsersTable() {
  const { users: { rows } } = await getAnyData<IUserDatabase>(`${BASE_URL}/api/get-users`);

  return (
    <section className="userTable_section">
      <div className="usersTable">
        <table>
          <thead>
            <tr>
              <th><TranslateTextServer translationKey="name" /></th>
              <th><TranslateTextServer translationKey="email" /></th>
              <th><TranslateTextServer translationKey="birthDate" /></th>
              <th><TranslateTextServer translationKey="edit" /></th>
              <th><TranslateTextServer translationKey="delete" /></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((item) => <UserRow item={item} key={item.id} />)}
          </tbody>
        </table>
      </div>
    </section>
  )
}
