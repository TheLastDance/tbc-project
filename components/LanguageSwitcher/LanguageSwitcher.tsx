"use client"

import "./LanguageSwitcher.css"
import { setTranslateCookie } from "@/services/actions"
import { useChangeLocale, useCurrentLocale } from '@/locales/client'

export function LanguageSwitcher() {
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();

  const handleClick = async (locale: Locale) => {
    changeLocale(locale);
    setTranslateCookie(locale);
  }

  return (
    <>
      {locale === "en" ?
        <button className="languageSwitcher button" onClick={() => handleClick("ka")}>GE</button> :
        <button className="languageSwitcher button" onClick={() => handleClick("en")}>EN</button>
      }
    </>
  )
}
