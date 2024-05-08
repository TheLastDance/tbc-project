"use client"
import "./AddUserButton.css"
import { useToggle } from "@/services/hooks/useToggle";
import { AddEditUserModal } from "@/components/Modals/AddEditUserModal/AddEditUserModal";

export function AddUserButton() {
  const { toggle, setToggleFalse, setToggleTrue } = useToggle();

  return <>
    <button className="AddUserButton" type="button" onClick={setToggleTrue}>
      ➕ Add User
    </button>
    {toggle && <AddEditUserModal setToggleFalse={setToggleFalse} />}
  </>
}
