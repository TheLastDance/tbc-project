import "./BlogList.css";
import { Post } from "./Post/Post";

export const revalidate = 0;

export function BlogList({ posts, admin }: { posts: IPostItem[], admin?: boolean }) {

  return (
    <>
      <ul>
        {posts.map((item: IPostItem) => (
          <Post key={item.id} item={item} admin={admin} />
        ))}
      </ul>
    </>
  );
}
