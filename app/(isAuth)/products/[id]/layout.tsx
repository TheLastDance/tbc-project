import { getAnyData } from "@/services/data-fetch/getAnyData";
import { ChildrenProp } from "@/typesLuka";

interface IGenerateMetaData {
  params: {
    id: number;
  };
}

export async function generateMetadata({ params: { id } }: IGenerateMetaData) {
  const data = await getAnyData(`https://dummyjson.com/products/${id}`);

  if (!data.title) return { title: "Product not found!" };

  const { title, description } = data;

  return {
    title: `${title}`,
    description: `${description}`,
  };
}

export async function generateStaticParams() {
  const data = await getAnyData(`https://dummyjson.com/products?limit=0`);
  const { products }: { products: Array<Record<string, number>> } = data;

  return products.map((item) => ({ id: String(item.id) }));
}

export default function layout({ children }: ChildrenProp) {
  return <>{children}</>;
}
