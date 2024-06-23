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
  return metaDataTranslations[locale][key];
}

export const getCookieExpirationDate = (hoursToExpire: number) => {
  const date = new Date();
  date.setHours(date.getHours() + hoursToExpire);

  return date;
}

export const cookieExpirationOneYear = getCookieExpirationDate(365 * 24); // will expire in one year after it was set.

export const getPathWithLocales = (locales: LocaleTuple, path: string) => {
  const pathName = `${path.startsWith('/') ? '' : '/'}${path}`;
  const urls = locales.map(item => `/${item}${pathName}`);

  return [pathName, ...urls]
} // will return an array with this path and all possible combinations of this path with locales.

export const readFileAsDataURL = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = () => resolve(fileReader.result as string);
    fileReader.onerror = reject;
    fileReader.readAsDataURL(file);
  });
};

export const loadImagesSequentially = async (files: File[]): Promise<string[]> => {
  const results: string[] = [];
  for (const file of files) {
    const result = await readFileAsDataURL(file);
    results.push(result);
  }
  return results;
};

export const buildCartInfo = (userCart: ICartProduct[], products: IProductItem[]) => {
  const productMap = products.reduce((acc: { [key: string]: IProductItem }, item) => {
    acc[item.id] = { ...item, price: +item.price };
    return acc;
  }, {});

  const cartProducts = userCart.map((item) => productMap[item.id] && ({ ...productMap[item.id], quantity: item.quantity }));
  const calculatedValues = cartProducts.reduce((acc, item) => {
    acc.price = acc.price + item.price * item.quantity
    acc.count = acc.count + item.quantity
    return acc
  }, { price: 0, count: 0 })

  const info = { ...calculatedValues, products: cartProducts };

  return info;
}

export const calculateAge = (birthDate: Date | string) => {
  const today = new Date();
  const birth = new Date(birthDate);

  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }

  return age;
}
