import "./Product.css"
import { Card } from "@/components/Card/Card";
import Link from "next/link";
import Image from "next/image";

export function Product({ item, index }) {
  const { title, description, id, images: [image] } = item;

  return (
    <Card>
      <Link href={`/products/${id}`} scroll={true}>{title}</Link>
      <Image
        src={image}
        alt={title}
        width={400}
        height={650}
        // approximately only 6 images will be above the fold in future, so I need priority only for them
        priority={index < 6}
      />
      <p>{description}</p>
      <button type='button'>Add to Cart</button>
    </Card>
  )
}
