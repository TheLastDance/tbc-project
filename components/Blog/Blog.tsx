"use client"
import "./Blog.css"
import { BlogList } from "./BlogList/BlogList"
import { TranslateText } from "../TranslateText/TranslateText"
import Link from "next/link"
import { Edit } from "@/components/Icons/Edit";
import { Claims } from "@auth0/nextjs-auth0";
import { useState, useMemo } from "react";
import { useDebounce } from "@/services/hooks/useDebounce";
import { Search } from "../Search/Search";

export function Blog({ posts, user }: { posts: IPostItem[], user: Claims | undefined }) {
  const [searchText, setSearchText] = useState("");
  const debouncedValue = useDebounce(searchText);

  const filteredPosts = useMemo(() => posts.filter(({ title }) => title.toLowerCase().includes(debouncedValue.toLowerCase())), [debouncedValue, posts]);

  return (
    <section id="blog">
      <h2>
        <TranslateText translationKey="blog" />
      </h2>
      <div className="addPost_container">
        <Search
          inputID="blog_search"
          inputValue={searchText}
          handleInputChange={(e) => setSearchText(e.target.value)}
        />
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
