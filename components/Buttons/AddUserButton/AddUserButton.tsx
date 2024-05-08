"use client"
import "./AddUserButton.css"
import { useToggle } from "@/services/hooks/useToggle";
import { AddEditUserModal } from "@/components/Modals/AddEditUserModal/AddEditUserModal";
import { TranslateText } from "@/components/TranslateText/TranslateText";

export function AddUserButton() {
  const { toggle, setToggleFalse, setToggleTrue } = useToggle();

  return <>
    <button className="AddUserButton" type="button" onClick={setToggleTrue}>
      ➕ <TranslateText translationKey="addUser" />
    </button>
    {toggle && <AddEditUserModal setToggleFalse={setToggleFalse} />}
  </>
}
