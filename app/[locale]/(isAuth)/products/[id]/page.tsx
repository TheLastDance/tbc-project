import { FullProduct } from "@/components/Products/FullProduct/FullProduct";
import { setStaticParamsLocale } from "next-international/server";
import { Suspense } from "react";
import { FullProductSkeleton } from "@/components/Loaders/FullProductSkeleton/FullProductSkeleton";

interface IProps {
  params: {
    id: number,
    locale: Locale
  }
}

export default function FullProductPage({ params: { id, locale } }: IProps) {
  setStaticParamsLocale(locale);

  return (
    <Suspense fallback={<FullProductSkeleton />}>
      <FullProduct id={id} />
    </Suspense>
  );
}
