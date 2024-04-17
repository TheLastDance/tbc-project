import "./AuthHeader.css";
import { Navigation } from "../../Navigation/Navigation";
import { Logo } from "../../Logo/Logo";
import { LogOutButton } from "@/components/LogOutButton/LogOutButton";

export function AuthHeader() {

  return (
    <header className="authHeader">
      <Logo />
      <div>
        <Navigation />
        <LogOutButton />
      </div>
    </header>
  )
}
