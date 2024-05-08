import "./UserList.css";

import { DeleteUserButton } from "@/components/Buttons/DeleteUserButton/DeleteUserButton";
import { EditUserButton } from "../Buttons/EditUserButton/EditUserButton";
import { getAnyData } from "@/services/data-fetch/getAnyData";

// export const revalidate = 0;
export async function UserList() {
  const { users: { rows } } = await getAnyData<IUserDatabase>("http://localhost:3000/api/get-users");

  return (
    <ul>
      {rows.map((item) => <li className="users_list" key={item.id}>
        <p>{item.name}</p>
        <p>{item.email}</p>
        <p>{item.birthDate}</p>
        <EditUserButton user={item} />
        <DeleteUserButton id={item.id} />
      </li>)}
    </ul>
  )
}
