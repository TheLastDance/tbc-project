import { BlogList } from "@/components/Blog/BlogList/BlogList"
import { setStaticParamsLocale } from "next-international/server";

interface IProps {
  params: {
    locale: Locale;
  }
}

export default function Blog({ params: { locale } }: IProps) {
  setStaticParamsLocale(locale)

  return (
    <>
      <BlogList />
    </>
  )
}
