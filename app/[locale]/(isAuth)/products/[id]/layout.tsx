import { getProduct } from "@/services/sqlQueries/products/getProduct";
import { BASE_URL } from "@/services/constants";

interface IProps {
  params: {
    id: number,
    locale: Locale,
  }
}

export async function generateMetadata({ params: { id, locale } }: IProps) {
  const data = await getProduct(id) as IProductItem;

  if (!data?.title) return { title: "Product not found!" };

  const { title, description, images } = data;

  return {
    title: `${title}`,
    description: `${description}`,
    openGraph: {
      title: `${title}`,
      description: `${description}`,
      siteName: 'CyberSphere',
      locale: locale,
      type: 'website',
      url: `${BASE_URL}/blog/${id}`,
      images: [
        {
          url: images[0],
          width: 550,
          height: 750,
          alt: title,
        },
      ]
    },
    twitter: {
      card: 'summary_large_image',
      site: '@YourTwitterHandle',
      title: `${title}`,
      description: `${description}`,
      images: [
        {
          url: images[0],
          alt: title,
        },
      ],
    },
  };
}

// export async function generateStaticParams() {
//   const data = await getAnyData<{ products: IProductItem[] }>(`https://dummyjson.com/products`);
//   const { products } = data;

//   return products.map((item) => ({ id: String(item.id) }));
// }

export default function layout({ children }: ChildrenProps) {
  return <>{children}</>;
}
