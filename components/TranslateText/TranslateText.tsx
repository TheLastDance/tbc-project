"use client";

import { useContext } from "react";
import { languageContext } from "@/services/providers/LanguageProvider";
import { translations } from "@/translations/translations";
import { Loader } from "../Loaders/Loader/Loader";

interface ITranslateTextProps {
  translationKey: string;
}

export function TranslateText({ translationKey }: ITranslateTextProps) {
  const { locale } = useContext(languageContext);

  if (!locale) return <Loader size="18px" />;

  return translations[locale][translationKey];
}
