"use client"

import "./LogOutButton.css";
import { logout } from "@/services/actions";
import Image from "next/image";
import logout_icon from "@/public/icons/logout-icon.svg";

export function LogOutButton() {

  const handleLogOut = async () => {
    await logout();
  }

  return (
    <button
      type="button"
      onClick={handleLogOut}
      className="logout_button"
    >
      <Image
        src={logout_icon}
        alt="logout"
        width={30}
        height={30}
      />
    </button>
  )
}
