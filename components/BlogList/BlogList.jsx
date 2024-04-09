"use client"

import "./BlogList.css";
import { useEffect, useState } from "react";
import { Post } from "./Post/Post";
import { handleFetch } from "@/utils";

export function BlogList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const handlePostsFetch = async () => {
      const data = await handleFetch("https://dummyjson.com/posts");
      setPosts(data.posts);
    }
    handlePostsFetch();
  }, [])

  return (
    <section id="blog">
      <h2>Blog:</h2>
      <ul>
        {posts.map((item) =>
          <Post
            key={item.id}
            item={item}
          />
        )}
      </ul>
    </section>
  )
}
