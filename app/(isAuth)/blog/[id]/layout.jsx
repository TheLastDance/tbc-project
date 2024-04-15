import { handleFetch } from "@/utils"

export async function generateMetadata({ params: { id } }) {
  const data = await handleFetch(`https://dummyjson.com/posts/${id}`);

  if (!data) return { title: 'Post not found!' };

  const { title } = data;

  return {
    title: `Post - ${id}`,
    description: `${title}`
  }
}

export async function generateStaticParams() {
  // only 30 posts will be statically pregenerated, if want all then use searchParam limit=0 as in products.
  const data = await handleFetch(`https://dummyjson.com/posts`);
  const { posts } = data;

  return posts.map((item) => ({ id: String(item.id) }));
}

export default function layout({ children }) {
  return (
    <>{children}</>
  )
}