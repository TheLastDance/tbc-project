import "./AuthHeader.css";
import { Navigation } from "../../Navigation/Navigation";
import { Logo } from "../../Logo/Logo";
import { LogOutButton } from "@/components/Buttons/LogOutButton/LogOutButton";
import { ThemeModeButton } from "@/components/Buttons/ThemeModeButton/ThemeModeButton";
import { LanguageSwitcher } from "@/components/LanguageSwitcher/LanguageSwitcher";
import { Burger } from "@/components/Burger/Burger";

export function AuthHeader() {
  return (
    <header className="authHeader">
      <Logo />
      <div className="mainNavigation_container">
        <Navigation />
        <LanguageSwitcher />
        <ThemeModeButton />
        <LogOutButton />
      </div>
      <Burger />
    </header>
  )
}
