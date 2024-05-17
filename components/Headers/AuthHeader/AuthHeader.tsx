import "./AuthHeader.css";
import { Navigation } from "../../Navigation/Navigation";
import { Logo } from "../../Logo/Logo";
import { LogOutButton } from "@/components/Buttons/LogOutButton/LogOutButton";
import { ThemeModeButton } from "@/components/Buttons/ThemeModeButton/ThemeModeButton";
import { LanguageSwitcher } from "@/components/LanguageSwitcher/LanguageSwitcher";
import { CartLink } from "@/components/Links/CartLink/CartLink";
import { Burger } from "@/components/Burger/Burger";
import { getCart } from "@/services/data-fetch/cart/get-cart"

export async function AuthHeader() {
  const cart = await getCart();

  return (
    <header className="authHeader">
      <Logo />
      <div className="mainNavigation_container">
        <Navigation />
        <LanguageSwitcher />
        <ThemeModeButton />
        <CartLink cart={cart} />
        <LogOutButton />
        <Burger />
      </div>
    </header>
  )
}
