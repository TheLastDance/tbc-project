"use client"

import { useToggle } from "@/services/hooks/useToggle";
import { AddEditUserModal } from "@/components/Modals/AddEditUserModal/AddEditUserModal";
import { TranslateText } from "@/components/TranslateText/TranslateText";

export function EditUserButton({ user }: { user: IUser }) {
  const { toggle, setToggleFalse, setToggleTrue } = useToggle();

  return <>
    <button type="button" onClick={setToggleTrue}>
      📝 <TranslateText translationKey="edit" />
    </button>
    {toggle && <AddEditUserModal edit setToggleFalse={setToggleFalse} user={user} />}
  </>
}