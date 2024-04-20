import "./NotAuthHeader.css";
import { Logo } from "@/components/Logo/Logo";
import { ThemeModeButton } from "@/components/Buttons/ThemeModeButton/ThemeModeButton";

export function NotAuthHeader() {
  return (
    <header className="notAuthHeader">
      <Logo />
      <ThemeModeButton />
    </header>
  )
}
