import { FullProduct } from "@/components/Products/FullProduct/FullProduct";
import { setStaticParamsLocale } from "next-international/server";

interface IProps {
  params: {
    id: number,
    locale: Locale
  }
}

export default function FullProductPage({ params: { id, locale } }: IProps) {
  setStaticParamsLocale(locale);

  return (
    <>
      <FullProduct id={id} />
    </>
  );
}
