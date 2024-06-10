import "./Blog.css"
import { BlogList } from "./BlogList/BlogList"
import { TranslateText } from "../TranslateText/TranslateText"
import Link from "next/link"
import { Edit } from "@/components/Icons/Edit";
import { Search } from "../Search/Search";
import { getSession } from "@auth0/nextjs-auth0";
import { getPosts } from "@/services/sqlQueries/posts/getPosts";
import { PaginationUI } from "../Pagination/Pagination";

interface IProps {
  searchText: string,
  currentPage: number,
  postsPerPage?: number,
  admin?: boolean,
}

export async function Blog({ searchText, currentPage, admin, postsPerPage = 10 }: IProps) {
  const posts = await getPosts() as IPostItem[];
  const session = await getSession();
  const user = session?.user;

  const filteredPosts = posts.filter(({ title }) => title.toLowerCase().includes(searchText.toLowerCase()));
  const paginatedPosts = filteredPosts.slice(postsPerPage * (currentPage - 1), currentPage * postsPerPage);

  return (
    <section id="blog">
      <h2>
        <TranslateText translationKey="blog" />
      </h2>
      <div className="addPost_container">
        <Search inputID="blog_search" />
        {user && !admin &&
          <Link href="/blog/new" className="resetButtonStyles">
            <Edit />
          </Link>}
      </div>
      {!paginatedPosts.length ? <TranslateText translationKey="blog.notFound" /> : null}
      <BlogList posts={paginatedPosts} admin={admin} />
      <PaginationUI totalPages={filteredPosts.length} size={postsPerPage} />
    </section>
  )
}
