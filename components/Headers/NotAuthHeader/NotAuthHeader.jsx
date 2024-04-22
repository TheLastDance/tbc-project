import "./NotAuthHeader.css";
import { Logo } from "@/components/Logo/Logo";
import { ThemeModeButton } from "@/components/Buttons/ThemeModeButton/ThemeModeButton";
import { LanguageSwitcher } from "@/components/LanguageSwitcher/LanguageSwitcher";

export function NotAuthHeader() {
  return (
    <header className="notAuthHeader">
      <Logo />
      <div>
        <LanguageSwitcher />
        <ThemeModeButton />
      </div>
    </header>
  )
}
