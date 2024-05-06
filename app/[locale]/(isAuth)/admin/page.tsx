import { getAnyData } from "@/services/data-fetch/getAnyData";
import { Input } from "@/components/Input/Input";
import { createUser } from "@/services/actions";
import { DeleteButton } from "@/components/Buttons/DeleteButton/DeleteButton";

export default async function Test() {
  const { users: { rows } } = await getAnyData<any>("http://localhost:3000/api/get-users");

  return (
    <>
      <form action={createUser}>
        <Input label="Name:" name="name" id="test_name" type="text" />
        <Input label="Email:" name="email" id="test_email" type="email" />
        <button type="submit">Add user</button>
      </form>

      <ul>
        {rows.map(({ name, email, id }: any) => <li key={id}>
          <p>{name}</p>
          <p>{email}</p>
          <DeleteButton id={id} />
        </li>)}
      </ul>
    </>
  )
}
