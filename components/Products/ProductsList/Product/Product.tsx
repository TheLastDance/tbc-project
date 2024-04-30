import "./Product.css";
import { Card } from "@/components/Card/Card";
import { LocaleLink } from "@/components/Links/LocaleLink";
import Image from "next/image";
import { TranslateText } from "@/components/TranslateText/TranslateText";

interface IProps {
  item: IProductItem;
  index: number;
}

export function Product({ item, index }: IProps) {
  const {
    title,
    description,
    id,
    images: [image],
  } = item;

  return (
    <Card>
      <LocaleLink href={`/products/${id}`}>{title}</LocaleLink>
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
      <button type="button">
        <TranslateText translationKey="button.addToCart" />
      </button>
    </Card>
  );
}
