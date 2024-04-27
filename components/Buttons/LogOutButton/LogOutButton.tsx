"use client"

import "./LogOutButton.css";
import { logout } from "@/services/actions";
import { LogOutIcon } from "@/components/Icons/LogOut";

export function LogOutButton() {

  const handleLogOut = async () => {
    await logout();
  }

  return (
    <button
      type="button"
      className="logout_button resetButtonStyles"
      onClick={handleLogOut}
      title="logout"
    >
      <LogOutIcon />
    </button>
  )
}
