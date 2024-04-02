import "./BlogList.css";
import { blogPosts } from "@/data/blogPosts";
import { Post } from "./Post/Post";

export function BlogList() {
  const { posts } = blogPosts;

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
