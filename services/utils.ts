import { metaDataTranslations, metaDataTranslationKey } from "@/translations/metaDataTranslations";

export const handleChangeInputObj = <T>(
  setState: React.Dispatch<React.SetStateAction<T>>,
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  key: string) => {
  setState((prev: T) => ({
    ...prev,
    [key]: e.target.value
  }))
}

export const generateDynamicMetaData = (key: metaDataTranslationKey, locale: Locale): MetadataType => {
  const { ...metadata } = metaDataTranslations[locale][key];
  return { ...metadata }
}

export const getCookieExpirationDate = (hoursToExpire: number) => {
  const date = new Date();
  date.setHours(date.getHours() + hoursToExpire);

  return date;
}

export const cookieExpirationOneYear = getCookieExpirationDate(365 * 24); // will expire in one year after it was set.

export const getLocaleFromPath = (path: string): Locale => {
  const regex = /^\/([a-zA-Z0-9_-]+)\/?.*/;
  const paths = path.match(regex)!;

  return paths[1] as Locale; // I am sure that this function will return locale, cause middleware handles redirects.
}

export const getPathWithLocales = (locales: LocaleTuple, path: string) => {
  const pathName = `${path.startsWith('/') ? '' : '/'}${path}`;
  const urls = locales.map(item => `/${item}${pathName}`);

  return [pathName, ...urls]
} // will return an array with this path and all possible combinations of this path with locales.