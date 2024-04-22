import { metaDataTranslations } from "@/translations/metaDataTranslations";

export const handleChangeInputObj = (setState, e, key) => {
  setState(prev => ({
    ...prev,
    [key]: e.target.value
  }))
}

export const generateDynamicMetaData = (key, locale) => {

  if (locale) {
    const { ...metadata } = metaDataTranslations[locale][key];

    return { ...metadata }
  }

  const { ...metadata } = metaDataTranslations.en[key]; // default en localization

  return { ...metadata }
}

export const getCookieExpirationDate = (hoursToExpire) => {
  const date = new Date();
  date.setHours(date.getHours() + hoursToExpire);

  return date;
}

export const cookieExpirationOneYear = getCookieExpirationDate(365 * 24); // will expire in one year after it was set.