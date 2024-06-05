import "./Blog.css"
import { BlogList } from "./BlogList/BlogList"
import { TranslateText } from "../TranslateText/TranslateText"
import Link from "next/link"
import { Edit } from "@/components/Icons/Edit";
import { Search } from "../Search/Search";
import { getSession } from "@auth0/nextjs-auth0";
import { getPosts } from "@/services/sqlQueries/posts/getPosts";

export async function Blog({ searchText }: { searchText: string }) {
  const posts = await getPosts() as IPostItem[];
  const session = await getSession();
  const user = session?.user;

  const filteredPosts = posts.filter(({ title }) => title.toLowerCase().includes(searchText.toLowerCase()));

  return (
    <section id="blog">
      <h2>
        <TranslateText translationKey="blog" />
      </h2>
      <div className="addPost_container">
        <Search inputID="blog_search" />
        {user &&
          <Link href="/blog/new" className="resetButtonStyles">
            <Edit />
          </Link>}
      </div>
      <BlogList posts={filteredPosts} />
      {!filteredPosts.length ? <TranslateText translationKey="blog.notFound" /> : null}
    </section>
  )
}
