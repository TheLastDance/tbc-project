"use client"
import "./AddUserButton.css"
import { useToggle } from "@/services/hooks/useToggle";
import { AddEditUserModal } from "@/components/Modals/AddEditUserModal/AddEditUserModal";
import { Button } from "@/components/UI/Buttons/Button/Button";

export function AddUserButton() {
  const { toggle, setToggleFalse, setToggleTrue } = useToggle();

  return <>
    <Button
      className="AddUserButton hero-h glitch-h layers-h"
      type="button"
      onClick={setToggleTrue}
      translationKey="addUser"
      mode="glitchHover"
    >
      ➕
    </Button>

    {toggle && <AddEditUserModal setToggleFalse={setToggleFalse} />}
  </>
}
