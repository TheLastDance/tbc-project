import "./BlogList.css";
import { Post } from "./Post/Post";
import { TranslateText } from "@/components/TranslateText/TranslateText";
import { getPosts } from "@/services/sqlQueries/posts/getPosts";
// import { getPosts } from "@/services/data-fetch/post/getPosts";

export const revalidate = 0;

export async function BlogList() {
  const post = await getPosts();

  return (
    <section id="blog">
      <h2>
        <TranslateText translationKey="blog" />
      </h2>
      <ul>
        {post.map((item: IPostItem) => (
          <Post key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}
