import { BASE_URL } from "@/services/constants";
import { getAnyData } from "../getAnyData";

export const getPosts = async () => {
  const posts = await getAnyData<{ rows: IPostItem[] }>(`${BASE_URL}/api/posts/get-posts`)
  return posts.rows;
}
