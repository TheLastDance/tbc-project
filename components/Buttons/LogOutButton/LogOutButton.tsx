"use client"

import "./LogOutButton.css";
import { LogOutIcon } from "@/components/Icons/LogOut";

export function LogOutButton() {

  return (
    <a
      href="/api/auth/logout"
      className="logout_button"
    >
      <LogOutIcon />
    </a>
  )
}
