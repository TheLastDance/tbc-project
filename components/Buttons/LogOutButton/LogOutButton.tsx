"use client"

import "./LogOutButton.css";
import { logout } from "@/services/actions";
import { LogOutIcon } from "@/components/Icons/LogOut";
import { usePathname } from "next/navigation";

export function LogOutButton() {
  const pathName = usePathname();

  const handleLogOut = async () => {
    await logout(pathName);
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
