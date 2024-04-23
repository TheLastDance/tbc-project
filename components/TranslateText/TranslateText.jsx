"use client";

import { useContext } from "react";
import { languageContext } from "@/services/providers/LanguageProvider";
import { translations } from "@/translations/translations";
import { Loader } from "../Loaders/Loader/Loader";

export function TranslateText({ translationKey }) {
  const { locale } = useContext(languageContext);

  if (!locale) return <Loader size="18px" />;
  console.log(typeof translations[locale][translationKey]);
  return translations[locale][translationKey];
}
