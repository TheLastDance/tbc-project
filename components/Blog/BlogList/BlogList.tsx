import "./BlogList.css";
import { Post } from "./Post/Post";

export const revalidate = 0;

export function BlogList({ posts }: { posts: IPostItem[] }) {

  return (
    <>
      <ul>
        {posts.map((item: IPostItem) => (
          <Post key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
}
