"use client";

import { translations } from "@/translations/translations";
import { usePathname } from "next/navigation";
import { getLocaleFromPath } from "@/services/utils";

interface ITranslateTextProps {
  translationKey: string;
}

export function TranslateText({ translationKey }: ITranslateTextProps) {
  const pathName = usePathname();
  const locale = getLocaleFromPath(pathName) as "en" | "ka"; // I am sure in this type because middleware handles it for me

  return translations[locale][translationKey];
}
