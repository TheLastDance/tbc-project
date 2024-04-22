"use client";
import { createContext, useEffect } from "react";
import { useState } from "react";

export const languageContext = createContext({
  locale: "en",
  setLocale: () => { },
});

export const LanguageProvider = ({ children }) => {
  const [locale, setLocale] = useState(null);

  useEffect(() => {
    setLocale(localStorage.getItem("locale") || "en") //maybe read from cookie in future and not storage
  }, [])

  const value = {
    locale,
    setLocale
  }

  return <languageContext.Provider value={value}>{children}</languageContext.Provider>
}