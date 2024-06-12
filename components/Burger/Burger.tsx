"use client"

import "./Burger.css"
import { useState } from "react";
import { ThemeModeButton } from "../Buttons/ThemeModeButton/ThemeModeButton";
import { LogOutButton } from "../Buttons/LogOutButton/LogOutButton";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";
import { Navigation } from "../Navigation/Navigation";
import { CartLink } from "../Links/CartLink/CartLink";
import { Claims } from "@auth0/nextjs-auth0";
import { LogInButton } from "../Buttons/LogInButton/LogInButton";

export function Burger({ user }: { user: IUser | Claims | undefined, }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBurger = () => {
    setIsOpen(prev => !prev);
  }

  // should add focus trapping in future
  return (
    <div className="burger_container">
      <button title="burger menu" className="burgerButtonOpen resetButtonStyles" type="button" onClick={toggleBurger}>
        <svg xmlns="http://www.w3.org/2000/svg" width="1.75rem" height="1.75rem" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
        </svg>
      </button>
      <div className={isOpen ? "burgerOverlay" : "burgerOverlay burgerOverlay_close"} >
        <button title="close button" type="button" className="burgerButtonClose resetButtonStyles" onClick={() => setIsOpen(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
          </svg>
        </button>
        <div className="burger_menuButtons">
          <CartLink onClick={toggleBurger} />
          <ThemeModeButton />
          <LanguageSwitcher />
          {user && <LogOutButton />}
          {!user && <LogInButton />}
        </div>
        <Navigation user={user} onClick={toggleBurger} />
      </div>
    </div>
  )
}
