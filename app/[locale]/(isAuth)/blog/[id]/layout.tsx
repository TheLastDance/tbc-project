import { getAnyData } from "@/services/data-fetch/getAnyData";


export async function generateMetadata({ params: { id } }: IIdParamProps) {
  const data = await getAnyData<IPostItem>(`https://dummyjson.com/posts/${id}`);

  if (!data.title) return { title: "Post not found!" };

  const { title } = data;

  return {
    title: `Post - ${id}`,
    description: `${title}`,
  };
}

export async function generateStaticParams() {
  // only 30 posts will be statically pregenerated, if want all then use searchParam limit=0 as in products.
  const data = await getAnyData<{ posts: IPostItem[] }>(`https://dummyjson.com/posts`);
  const { posts } = data;

  return posts.map((item) => ({ id: String(item.id) }));
}

export default function layout({ children }: ChildrenProps) {
  return <>{children}</>;
}