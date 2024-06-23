import { FullPost } from "@/components/Blog/FullPost/FullPost";
import { Suspense } from "react";
import { FullPostLoader } from "@/components/Loaders/FullPostLoader/FullPostLoader";

interface IProps {
  params: {
    id: number,
    locale: Locale
  }
}

export default function FullPostPage({ params: { id } }: IProps) {

  return (
    <Suspense fallback={<FullPostLoader />}>
      <FullPost id={id} />
    </Suspense>
  );
}
