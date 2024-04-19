"use client"

import "./LogOutButton.css";
import Image from "next/image";
import logout_icon from "@/public/icons/logout-icon.svg";
import { getAnyData } from "@/services/data-fetch/getAnyData";
import { useRouter } from "next/navigation";

export function LogOutButton() {
  const router = useRouter();

  const handleLogOut = async () => {
    await getAnyData("/api/logout");
    router.push("/");
    router.refresh();
  }

  return (
    <button
      type="button"
      className="logout_button"
      onClick={handleLogOut}
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
