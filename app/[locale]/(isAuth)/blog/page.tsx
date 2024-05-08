import { BlogList } from "@/components/Blog/BlogList/BlogList"
import { setStaticParamsLocale } from "next-international/server";

export default function Blog({ params: { locale } }: ILocaleParam) {
  setStaticParamsLocale(locale)

  return (
    <>
      <BlogList />
    </>
  )
}
