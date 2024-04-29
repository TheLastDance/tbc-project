"use client"

import "./LanguageSwitcher.css"
import { usePathname } from "next/navigation"
import { setTranslateCookie } from "@/services/actions"
import { getLocaleFromPath } from "@/services/utils"
import Link from "next/link"

export function LanguageSwitcher() {
  const pathName = usePathname();
  const locale = getLocaleFromPath(pathName);
  const path = pathName.split("/").slice(2).join("/");

  const handleClick = async (locale: Locale) => {
    setTranslateCookie(locale);
  } // pathName never will be / because middleware handles this

  return (
    <>
      {locale === "en" ?
        <Link href={`/ka/${path}`} className="languageSwitcher button" onClick={() => handleClick("ka")}>GE</Link> :
        <Link href={`/en/${path}`} className="languageSwitcher button" onClick={() => handleClick("en")}>EN</Link>
      }
    </>
  )
}
