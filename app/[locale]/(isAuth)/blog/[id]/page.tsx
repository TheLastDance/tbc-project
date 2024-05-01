import { FullPost } from "@/components/Blog/FullPost/FullPost";
import { Suspense } from "react";
import { FullPostLoader } from "@/components/Loaders/FullPostLoader/FullPostLoader";
import { ArrowNavigation } from "@/components/ArrowNavigation/ArrowNavigation";
import { setStaticParamsLocale } from "next-international/server";

interface IProps {
  params: {
    id: number,
    locale: Locale
  }
}

export default async function FullPostPage({ params: { id, locale } }: IProps) {
  setStaticParamsLocale(locale)
  return (
    <>
      <Suspense fallback={<FullPostLoader />}>
        <FullPost id={id} />
      </Suspense>
      <ArrowNavigation
        hrefPrev={`/blog/${+id - 1}`}
        hrefNext={`/blog/${+id + 1}`}
      />
    </>
  );
}
