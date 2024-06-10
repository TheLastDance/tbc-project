import { Suspense } from "react"
import { FullPostLoader } from "@/components/Loaders/FullPostLoader/FullPostLoader";
import { Blog } from "@/components/Blog/Blog";

export default function AdminBlog({ searchParams }: { searchParams?: { searchText?: string, page?: string } }) {
  const searchText = searchParams?.searchText || '';
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <>
      <Suspense fallback={<FullPostLoader />}>
        <div className="AdminBlog_page">
          <Blog searchText={searchText} currentPage={currentPage} postsPerPage={5} admin />
        </div>
      </Suspense>
    </>
  )
}
