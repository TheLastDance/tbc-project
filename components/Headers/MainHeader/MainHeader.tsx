import "./MainHeader.css";
import { Navigation } from "../../Navigation/Navigation";
import { Logo } from "../../Logo/Logo";
import { LogOutButton } from "@/components/Buttons/LogOutButton/LogOutButton";
import { LogInButton } from "@/components/Buttons/LogInButton/LogInButton";
import { ThemeModeButton } from "@/components/Buttons/ThemeModeButton/ThemeModeButton";
import { LanguageSwitcher } from "@/components/LanguageSwitcher/LanguageSwitcher";
import { CartLink } from "@/components/Links/CartLink/CartLink";
import { Burger } from "@/components/Burger/Burger";
import { getSession } from "@auth0/nextjs-auth0";
import { UserLink } from "@/components/Links/UserLink/UserLink";

export async function MainHeader() {
  const session = await getSession();

  return (
    <header className="authHeader">
      <Logo />
      <div className="mainNavigation_container">
        <Navigation user={session?.user} />
        {session?.user && <UserLink />}
        <CartLink />
        <ThemeModeButton />
        <LanguageSwitcher />
        {session?.user && <LogOutButton />}
        {!session?.user && <LogInButton />}
      </div>
      <Burger user={session?.user} />
    </header>
  )
}
