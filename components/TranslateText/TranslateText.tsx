"use client";

import { translations } from "@/translations/translations";
import { usePathname } from "next/navigation";
import { getLocaleFromPath } from "@/services/utils";
import { TranslationKey } from "@/translations/translations";

interface IProps {
  translationKey: TranslationKey;
}

export function TranslateText({ translationKey }: IProps) {
  const pathName = usePathname();
  const locale = getLocaleFromPath(pathName);

  return translations[locale][translationKey];
}
