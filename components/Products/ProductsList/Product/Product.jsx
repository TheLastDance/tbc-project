import "./Product.css"
import { Card } from "@/components/Card/Card";
import Image from "next/image";

export function Product({ item, index }) {
  const { name, description, image } = item;

  return (
    <Card>
      <h3>{name}</h3>
      <Image
        src={image}
        alt={name}
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
