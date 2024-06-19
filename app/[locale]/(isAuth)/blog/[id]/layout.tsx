import { getPost } from "@/services/sqlQueries/posts/getPost";
import { BASE_URL } from "@/services/constants";

interface IProps {
  params: {
    id: number,
    locale: Locale,
  }
}

export async function generateMetadata({ params: { id, locale } }: IProps) {
  const data = await getPost(id) as IPostItem;

  if (!data?.title) return { title: "Post not found!" };

  const { title, user_picture, body } = data;

  return {
    title: `Post - ${title}`,
    description: `${title}`,
    openGraph: {
      title: `${title}`,
      description: `${body}`,
      siteName: 'CyberSphere',
      locale: locale,
      type: 'website',
      url: `${BASE_URL}/blog/${id}`,
      images: [
        {
          url: user_picture,
          width: 400,
          height: 400,
          alt: title,
        },
      ]
    },
    twitter: {
      card: 'summary_large_image',
      site: '@YourTwitterHandle',
      title: `${title}`,
      description: `${body}`,
      images: [
        {
          url: user_picture,
          alt: title,
        },
      ],
    },
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
