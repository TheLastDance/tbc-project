import { metaDataTranslations } from "@/translations/metaDataTranslations";

// will add types next
export const handleChangeInputObj = (setState: any, e: any, key: any) => {
  setState((prev: any) => ({
    ...prev,
    [key]: e.target.value
  }))
}

export const generateDynamicMetaData = (key: string, locale: string | undefined): MetadataType => {
  if (locale) {
    const { ...metadata } = metaDataTranslations[locale][key];

    return { ...metadata }
  }

  const { ...metadata } = metaDataTranslations.en[key]; // default en localization

  return { ...metadata }
}

export const getCookieExpirationDate = (hoursToExpire: number) => {
  const date = new Date();
  date.setHours(date.getHours() + hoursToExpire);

  return date;
}

export const cookieExpirationOneYear = getCookieExpirationDate(365 * 24); // will expire in one year after it was set.