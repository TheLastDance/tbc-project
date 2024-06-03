import { BlogList } from "@/components/Blog/BlogList/BlogList"
import { Suspense } from "react";
import { FullPostLoader } from "@/components/Loaders/FullPostLoader/FullPostLoader";
import { getPosts } from "@/services/sqlQueries/posts/getPosts";

export default async function Blog() {
  const posts = await getPosts() as IPostItem[];

  return (
    <>
      <Suspense fallback={<FullPostLoader />}>
        <BlogList posts={posts} />
      </Suspense>
    </>
  )
}
