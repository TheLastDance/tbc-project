import { getPost } from "@/services/sqlQueries/posts/getPost";

interface IProps {
  params: {
    id: number,
    locale: Locale,
  }
}

export async function generateMetadata({ params: { id, locale } }: IProps) {
  const data = await getPost(id) as IPostItem;

  if (!data.title) return { title: "Post not found!" };

  const { title, user_picture } = data;

  return {
    title: `Post - ${title}`,
    description: `${title}`,
    openGraph: {
      title: `${title}`,
      description: `${title}`,
      siteName: 'CyberSphere',
      locale: locale,
      type: 'website',
      images: [
        {
          url: user_picture,
          width: 600,
          height: 600,
          alt: title,
        },
      ]
    }
  };
}

// export async function generateStaticParams() {
//   // only 30 posts will be statically pregenerated, if want all then use searchParam limit=0 as in products.
//   const data = await getAnyData<{ posts: IPostItem[] }>(`https://dummyjson.com/posts`);
//   const { posts } = data;

//   return posts.map((item) => ({ id: String(item.id) }));
// }

export default function layout({ children }: ChildrenProps) {
  return <>{children}</>;
}
