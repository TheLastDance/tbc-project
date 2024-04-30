import "./BlogList.css";
import { Post } from "./Post/Post";
import { getAnyData } from "@/services/data-fetch/getAnyData";
import { TranslateText } from "@/components/TranslateText/TranslateText";

export async function BlogList() {
  const data = await getAnyData<{ posts: IPostItem[] }>(`https://dummyjson.com/posts`);
  const { posts } = data;

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
