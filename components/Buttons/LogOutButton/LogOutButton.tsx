"use client"

import "./LogOutButton.css";
// import { logout } from "@/services/actions";
import { LogOutIcon } from "@/components/Icons/LogOut";

export function LogOutButton() {

  // const handleLogOut = async () => {
  //   await logout();
  // }

  return (
    <a
      href="/api/auth/logout"
      className="logout_button resetButtonStyles"
    >
      <LogOutIcon />
    </a>
  )
}
