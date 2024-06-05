import { Blog as BlogPage } from "@/components/Blog/Blog";
import { Suspense } from "react";
import { FullPostLoader } from "@/components/Loaders/FullPostLoader/FullPostLoader";

export default function Blog({ searchParams }: { searchParams?: { searchText?: string } }) {
  const searchText = searchParams?.searchText || '';

  return (
    <>
      <Suspense fallback={<FullPostLoader />}>
        <BlogPage searchText={searchText} />
      </Suspense>
    </>
  )
}
