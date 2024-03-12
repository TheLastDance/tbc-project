import "./BlogList.css";
import { Post } from "./Post/Post";
import { blogPosts } from "../../data/blogPosts";

export function BlogList() {
  const { posts } = blogPosts;

  return (
    <section className="blog">
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
