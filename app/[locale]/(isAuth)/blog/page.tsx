import { getPosts } from "@/services/sqlQueries/posts/getPosts";
import { getSession } from "@auth0/nextjs-auth0";
import { Blog as BlogPage } from "@/components/Blog/Blog";
import { Suspense } from "react";
import { FullPostLoader } from "@/components/Loaders/FullPostLoader/FullPostLoader";

export default async function Blog() {
  const posts = await getPosts() as IPostItem[];
  const session = await getSession();
  const user = session?.user;

  return (
    <>
      <Suspense fallback={<FullPostLoader />}>
        <BlogPage posts={posts} user={user} />
      </Suspense>
    </>
  )
}
