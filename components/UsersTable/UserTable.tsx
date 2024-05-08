import "./UsersTable.css";

import { getAnyData } from "@/services/data-fetch/getAnyData";
import { UserRow } from "./UserRow/UserRow";

// export const revalidate = 0;
export async function UsersTable() {
  const { users: { rows } } = await getAnyData<IUserDatabase>("http://localhost:3000/api/get-users");

  return (
    <section className="userTable_section">
      <div className="usersTable">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Birth date</th>
              <th>Edit</th>
              <th>Delete</th>
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
