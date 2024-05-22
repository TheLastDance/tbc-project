import { deleteUser } from "@/services/actions";
import { PendingButton } from "../PendingButton/PendingButton";

export function DeleteUserButton({ id }: { id: number }) {

  const handleDeleteUser = async () => {
    "use server"
    await deleteUser(id);
  }

  return (
    <form action={handleDeleteUser}>
      <PendingButton type="submit" translationKey="delete" mode="glitchHover">
        ✖
      </PendingButton>
    </form>
  )
}
