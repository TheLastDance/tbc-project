import "./Product.css";
import { Card } from "@/components/Card/Card";
import Link from "next/link";
import Image from "next/image";
import { CartIncrementButton } from "@/components/CartList/Buttons/CartIncrementButton";
import { DeleteProductButton } from "@/components/Buttons/DeleteProductButton/DeleteProductButton";
import { GlithHoverLink } from "@/components/UI/Links/GlithHoverLink";

interface IProps {
  item: IProductItem;
  index: number;
  admin?: boolean;
}

export function Product({ item, index, admin }: IProps) {
  const { title, description, id, images } = item;
  const [image] = images;

  return (
    <Card>
      {admin && <DeleteProductButton id={id} images={images} />}
      <Link href={`/products/${id}`}>{title}</Link>
      <Image
        src={image}
        alt={title}
        width={400}
        height={650}
        // approximately only 6 images will be above the fold in future, so I need priority only for them
        priority={index < 6}
      />
      <div className="productDescription_container">
        <p>{description}</p>
      </div>
      {admin ?
        <GlithHoverLink href={`/admin/products/edit/${id}`} translationKey="edit" />
        : <CartIncrementButton item={item} mode="glitchHover" translationKey="button.addToCart" />}
    </Card>
  );
}
