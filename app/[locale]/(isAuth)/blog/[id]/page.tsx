import { FullPost } from "@/components/Blog/FullPost/FullPost";
import { Suspense } from "react";
import { FullPostLoader } from "@/components/Loaders/FullPostLoader/FullPostLoader";
import { ArrowNavigation } from "@/components/ArrowNavigation/ArrowNavigation";

interface IProps {
  params: {
    id: number;
  };
}

export default async function FullPostPage({ params: { id } }: IProps) {
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
