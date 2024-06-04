import { BlogList } from "@/components/Blog/BlogList/BlogList"
import { Suspense } from "react";
import { FullPostLoader } from "@/components/Loaders/FullPostLoader/FullPostLoader";
import { getPosts } from "@/services/sqlQueries/posts/getPosts";
import { getSession } from "@auth0/nextjs-auth0";
import { TranslateText } from "@/components/TranslateText/TranslateText";
import { Edit } from "@/components/Icons/Edit";
import Link from "next/link";

export default async function Blog() {
  const posts = await getPosts() as IPostItem[];
  const session = await getSession();

  return (
    <section id="blog">
      <h2>
        <TranslateText translationKey="blog" />
      </h2>
      {session?.user && <div className="addPost_container">
        <Link href="/blog/new" className="resetButtonStyles">
          <Edit />
        </Link>
      </div>}
      <Suspense fallback={<FullPostLoader />}>
        <BlogList posts={posts} />
      </Suspense>
    </section>
  )
}
