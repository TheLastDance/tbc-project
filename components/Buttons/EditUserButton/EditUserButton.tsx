"use client"

import { useToggle } from "@/services/hooks/useToggle";
import { AddEditUserModal } from "@/components/Modals/AddEditUserModal/AddEditUserModal";
import { Button } from "@/components/UI/Buttons/Button/Button";
import { Edit } from "@/components/Icons/Edit";

export function EditUserButton({ user }: { user: IUser }) {
  const { toggle, setToggleFalse, setToggleTrue } = useToggle();

  return <>
    <Button
      type="button"
      onClick={setToggleTrue}
      mode="glitchHover"
      translationKey="edit"
    >
      <Edit />
    </Button>

    {toggle && <AddEditUserModal setToggleFalse={setToggleFalse} user={user} />}
  </>
}