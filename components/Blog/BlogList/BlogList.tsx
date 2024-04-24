import "./BlogList.css";
import { Post } from "./Post/Post";
import { getAnyData } from "@/services/data-fetch/getAnyData";
import { TranslateText } from "@/components/TranslateText/TranslateText";

export async function BlogList() {
  const data = await getAnyData(`https://dummyjson.com/posts`);
  const { posts } = data as { posts: PostItem[] };

  return (
    <section id="blog">
      <h2>
        <TranslateText translationKey="blog" />
      </h2>
      <ul>
        {posts.map((item: PostItem) => (
          <Post key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}
