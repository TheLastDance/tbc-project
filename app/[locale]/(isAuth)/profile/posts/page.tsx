import { LatestPostsList } from "@/components/LatestPostsList/LatestPostsList"
import { getUserPosts } from "@/services/sqlQueries/posts/getUserPosts"
import { Suspense } from "react"
import { Loader } from "@/components/Loaders/Loader/Loader"

interface IProps {
  searchParams?: {
    page?: string,
  }
}

export default async function ProfilePosts({ searchParams }: IProps) {
  const posts = await getUserPosts() as IPostItem[];

  return (
    <Suspense fallback={<Loader />} >
      <LatestPostsList params={searchParams!} posts={posts} paginationSize={20} />
    </Suspense>
  )
}
