import { getAnyData } from "@/services/data-fetch/getAnyData";

export async function generateMetadata({ params: { id } }) {
  const data = await getAnyData(`https://dummyjson.com/products/${id}`);

  if (!data.title) return { title: 'Product not found!' };

  const { title, description } = data;

  return {
    title: `${title}`,
    description: `${description}`
  }
}

export async function generateStaticParams() {
  const data = await getAnyData(`https://dummyjson.com/products?limit=0`);
  const { products } = data;

  return products.map((item) => ({ id: String(item.id) }))
}

export default function layout({ children }) {
  return (
    <>{children}</>
  )
}
