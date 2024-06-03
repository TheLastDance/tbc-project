"use client"

import "./BlogList.css";
import { Post } from "./Post/Post";
import { TranslateText } from "@/components/TranslateText/TranslateText";

export const revalidate = 0;

export function BlogList({ posts }: { posts: IPostItem[] }) {

  return (
    <section id="blog">
      <h2>
        <TranslateText translationKey="blog" />
      </h2>
      <ul>
        {posts.map((item: IPostItem) => (
          <Post key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}
