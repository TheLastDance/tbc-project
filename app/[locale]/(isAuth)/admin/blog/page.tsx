import { Suspense } from "react"
import { Blog } from "@/components/Blog/Blog";
import { PostsListSkeleton } from "@/components/Loaders/PostsListSkeleton/PostsListSkeleton";

export default function AdminBlog({ searchParams }: { searchParams?: { searchText?: string, page?: string } }) {
  const searchText = searchParams?.searchText || '';
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div className="AdminBlog_page">
      <Suspense fallback={<PostsListSkeleton />}>
        <Blog searchText={searchText} currentPage={currentPage} postsPerPage={5} admin />
      </Suspense>
    </div>
  )
}
