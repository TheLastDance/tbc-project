import { Blog as BlogPage } from "@/components/Blog/Blog";
import { Suspense } from "react";
import { PostsListSkeleton } from "@/components/Loaders/PostsListSkeleton/PostsListSkeleton";

export default function Blog({ searchParams }: { searchParams?: { searchText?: string, page?: string } }) {
  const searchText = searchParams?.searchText || '';
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <Suspense fallback={<PostsListSkeleton />}>
      <BlogPage searchText={searchText} currentPage={currentPage} />
    </Suspense>
  )
}
