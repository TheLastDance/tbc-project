import { Blog as BlogPage } from "@/components/Blog/Blog";
import { Suspense } from "react";
import { FullPostLoader } from "@/components/Loaders/FullPostLoader/FullPostLoader";

export default function Blog({ searchParams }: { searchParams?: { searchText?: string, page?: string } }) {
  const searchText = searchParams?.searchText || '';
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <>
      <Suspense fallback={<FullPostLoader />}>
        <BlogPage searchText={searchText} currentPage={currentPage} />
      </Suspense>
    </>
  )
}
