"use client"

import "./LanguageSwitcher.css"
import { usePathname } from "next/navigation"
import { setTranslateCookie } from "@/services/actions"
import { getLocaleFromPath } from "@/services/utils"

export function LanguageSwitcher() {
  const pathName = usePathname();
  const locale = getLocaleFromPath(pathName);

  const handleClick = async (locale: string, pathName: string) => {
    const path = pathName.split("/");
    path[1] = locale;
    setTranslateCookie(locale, path.join("/"));
  } // pathName never will be / because middleware handles this

  return (
    <>
      {locale === "en" ?
        <button className="languageSwitcher" onClick={() => handleClick("ka", pathName)}>GE</button> :
        <button className="languageSwitcher" onClick={() => handleClick("en", pathName)}>EN</button>
      }
    </>
  )
}
