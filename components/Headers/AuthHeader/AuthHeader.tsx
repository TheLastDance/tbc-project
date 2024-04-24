import "./AuthHeader.css";
import { Navigation } from "../../Navigation/Navigation";
import { Logo } from "../../Logo/Logo";
import { LogOutButton } from "@/components/Buttons/LogOutButton/LogOutButton";
import { ThemeModeButton } from "@/components/Buttons/ThemeModeButton/ThemeModeButton";
import { LanguageSwitcher } from "@/components/LanguageSwitcher/LanguageSwitcher";

export function AuthHeader() {
  return (
    <header className="authHeader">
      <Logo />
      <div>
        <Navigation />
        <LanguageSwitcher />
        <ThemeModeButton />
        <LogOutButton />
      </div>
    </header>
  )
}
