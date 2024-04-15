import "./AuthHeader.css";
import { Navigation } from "../../Navigation/Navigation";
import { Logo } from "../../Logo/Logo";

export function AuthHeader() {
  return (
    <header className="authHeader">
      <Logo />
      <Navigation />
    </header>
  )
}
