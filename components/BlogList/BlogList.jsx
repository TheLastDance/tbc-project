"use client"

import "./BlogList.css";
import { useEffect, useState } from "react";
import { Post } from "./Post/Post";
import { Loader } from "../Loader/Loader";
import { handleFetch } from "@/utils";

export function BlogList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const handlePostsFetch = async () => {
      const data = await handleFetch("https://dummyjson.com/posts", controller.signal);
      if (data) setPosts(data.posts);
      setLoading(false);
    }

    handlePostsFetch();

    return () => controller.abort();
  }, [])

  if (loading) return <Loader />

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
