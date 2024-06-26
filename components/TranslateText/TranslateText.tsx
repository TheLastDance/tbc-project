"use client";

import { TranslationKey } from "@/translations/translations";
import { useI18n } from '../../locales/client'

interface IProps {
  translationKey: TranslationKey;
}

export function TranslateText({ translationKey }: IProps) {
  const t = useI18n()

  return t(translationKey);
}
