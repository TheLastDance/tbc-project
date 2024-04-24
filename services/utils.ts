import { metaDataTranslations } from "@/translations/metaDataTranslations";

// will add types next
export const handleChangeInputObj = (setState: any, e: any, key: any) => {
  setState((prev: any) => ({
    ...prev,
    [key]: e.target.value
  }))
}

export const generateDynamicMetaData = (key: string, locale: string): MetadataType => {
  const { ...metadata } = metaDataTranslations[locale][key];
  return { ...metadata }
}

export const getCookieExpirationDate = (hoursToExpire: number) => {
  const date = new Date();
  date.setHours(date.getHours() + hoursToExpire);

  return date;
}

export const cookieExpirationOneYear = getCookieExpirationDate(365 * 24); // will expire in one year after it was set.

export const getLocaleFromPath = (path: string) => {
  const regex = /^\/([a-zA-Z0-9_-]+)\/?.*/;
  const paths = path.match(regex);
  if (!paths) {
    throw new Error('No match found');
  }
  return paths[1];
}

export const getPathWithLocales = (locales: string[], path: string) => {
  const pathName = `${path.startsWith('/') ? '' : '/'}${path}`;
  const urls = locales.map(item => `/${item}${pathName}`);

  return [pathName, ...urls]
} // will return an array with this path and all possible combinations of this path with locales.