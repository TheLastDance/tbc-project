import { FullPost } from "@/components/Blog/FullPost/FullPost";
import { Suspense } from "react";
import { Loader } from "@/components/Loader/Loader";
import { ArrowNavigation } from "@/components/ArrowNavigation/ArrowNavigation";

export default function FullPostPage({ params: { id } }) {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <FullPost id={id} />
      </Suspense>
      <ArrowNavigation
        hrefPrev={`/blog/${+id - 1}`}
        hrefNext={`/blog/${+id + 1}`}
      />
    </>
  )
}