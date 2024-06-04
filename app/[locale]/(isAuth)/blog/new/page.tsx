import { AddPostForm } from "@/components/Forms/AddPostForm/AddPostForm"
import { TranslateTextServer } from "@/components/TranslateText/TranslateTextServer"
import { setStaticParamsLocale } from "next-international/server"

export default function AddNewPostPage({ params: { locale } }: ILocaleParam) {
  setStaticParamsLocale(locale);

  return (
    <section className="addNewPost">
      <p className="addNewPost_introParagraph">
        <TranslateTextServer translationKey="blog.new.p" />
      </p>
      <AddPostForm />
    </section>
  )
}
