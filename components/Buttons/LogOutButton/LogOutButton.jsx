"use client"

import "./LogOutButton.css";
import { getAnyData } from "@/services/data-fetch/getAnyData";
import { useRouter } from "next/navigation";
import { LogOutIcon } from "@/components/Icons/LogOut";

export function LogOutButton() {
  const router = useRouter();

  const handleLogOut = async () => {
    await getAnyData("/api/logout");
    router.push("/login");
    router.refresh();
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
