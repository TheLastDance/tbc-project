import "./UserList.css";

import { DeleteUserButton } from "@/components/Buttons/DeleteUserButton/DeleteUserButton";
import { getAnyData } from "@/services/data-fetch/getAnyData";

// export const revalidate = 0;
export async function UserList() {
  const { users: { rows } } = await getAnyData<IUserDatabase>("http://localhost:3000/api/get-users");

  return (
    <ul>
      {rows.map(({ name, email, id, birthDate }) => <li className="users_list" key={id}>
        <p>{name}</p>
        <p>{email}</p>
        <p>{birthDate}</p>
        <DeleteUserButton id={id} />
      </li>)}
    </ul>
  )
}
