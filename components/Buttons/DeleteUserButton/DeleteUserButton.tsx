import { deleteUser } from "@/services/actions";
import { PendingButton } from "../PendingButton/PendingButton";
import { TranslateTextServer } from "@/components/TranslateText/TranslateTextServer";

export function DeleteUserButton({ id }: { id: number }) {

  const handleDeleteUser = async () => {
    "use server"
    await deleteUser(id);
  }

  return (
    <form action={handleDeleteUser}>
      <PendingButton type="submit">
        ✖ <TranslateTextServer translationKey="delete" />
      </PendingButton>
    </form>
  )
}
