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
      url: BASE_URL,
      locale: locale,
      type: 'website',
      images: [
        {
          url: images[0],
          width: 1000,
          height: 1200,
          alt: title,
        },
      ]
    }
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
