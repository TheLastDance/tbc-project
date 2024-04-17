"use client"

import "./AuthHeader.css";
import { Navigation } from "../../Navigation/Navigation";
import { Logo } from "../../Logo/Logo";
import { logout } from "@/services/actions";
import { useRouter } from "next/navigation";

export function AuthHeader() {
  const router = useRouter();

  const handleLogOut = async () => {
    await logout();
    router.refresh();
  }

  return (
    <header className="authHeader">
      <Logo />
      <Navigation />
      <button onClick={handleLogOut}>LOG OUT</button>
    </header>
  )
}
