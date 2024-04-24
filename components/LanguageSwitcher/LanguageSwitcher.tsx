"use client"

import "./LanguageSwitcher.css"
import { usePathname } from "next/navigation"
import { useContext } from "react"
import { setTranslateCookie } from "@/services/actions"
import { languageContext } from "@/services/providers/LanguageProvider"

export function LanguageSwitcher() {
  const pathName = usePathname();
  const { locale, setLocale } = useContext(languageContext);

  const handleClick = (locale: string, pathName: string) => {
    setLocale(locale);
    localStorage.setItem("locale", locale);
    setTranslateCookie(locale, pathName);
  }

  return (
    <>
      {locale === "en" ?
        <button className="languageSwitcher" onClick={() => handleClick("ka", pathName)}>GE</button> :
        <button className="languageSwitcher" onClick={() => handleClick("en", pathName)}>EN</button>
      }
    </>
  )
}
