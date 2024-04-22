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