import { TranslationKey } from "@/translations/translations";
import { getI18n } from "@/locales/server";

interface IProps {
  translationKey: TranslationKey;
}

export async function TranslateTextServer({ translationKey }: IProps) {
  const t = await getI18n()

  return t(translationKey);
}
