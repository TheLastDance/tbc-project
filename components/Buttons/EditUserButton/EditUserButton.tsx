"use client"

import { useToggle } from "@/services/hooks/useToggle";
import { AddEditUserModal } from "@/components/Modals/AddEditUserModal/AddEditUserModal";

export function EditUserButton({ user }: { user: IUser }) {
  const { toggle, setToggleFalse, setToggleTrue } = useToggle();

  return <>
    <button type="button" onClick={setToggleTrue}>
      Edit User
    </button>
    {toggle && <AddEditUserModal edit setToggleFalse={setToggleFalse} user={user} />}
  </>
}