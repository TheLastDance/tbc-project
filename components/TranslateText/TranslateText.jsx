"use client"

import { useContext } from "react";
import { languageContext } from "@/services/providers/LanguageProvider";
import { translations } from "@/translations/translations";

export function TranslateText({ translationKey }) {
  const { locale } = useContext(languageContext);

  if (!locale) return "Loading...";

  return translations[locale][translationKey]
}

