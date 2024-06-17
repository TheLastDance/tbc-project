import "./Product.css";
import Link from "next/link";
import Image from "next/image";
import { CartIncrementButton } from "@/components/CartList/Buttons/CartIncrementButton";
import { DeleteProductButton } from "@/components/Buttons/DeleteProductButton/DeleteProductButton";
import { GlithHoverLink } from "@/components/UI/Links/GlithHoverLink";
import { Rubik_Glitch } from "next/font/google";
import { StarRate } from "@/components/StarRate/StarRate";

interface IProps {
  item: IProductItem;
  index: number;
  admin?: boolean;
}

const rubik_glitch = Rubik_Glitch({ subsets: ["latin"], weight: "400" });

export function Product({ item, index, admin }: IProps) {
  const { title, description, id, images, category, average } = item;
  const [image] = images;

  return (
    <li className="product_card">
      {admin && <DeleteProductButton id={id} images={images} />}
      <Link href={`/products/${id}`} className="product_card_imgLink">
        <div className="product_card_imgLink_container">
          <Image
            src={image}
            alt={title}
            fill
            sizes="18rem"
            priority={index < 6}
          />
        </div>
      </Link>
      <div className="product_content">
        <div className="product_card_overlay">
          <span className={rubik_glitch.className}>
            CyberSphere
          </span>
        </div>
        <div className="product_info">
          <Link href={`/products/${id}`}>{title}</Link>
          <StarRate product_id={id} average={average} card />
          <p>{category}</p>
          <div className="productDescription_container">
            <p>{description}</p>
          </div>
          <div className="product_card_button_container">
            {admin ?
              <GlithHoverLink href={`/admin/products/edit/${id}`} translationKey="edit" />
              : <CartIncrementButton item={item} mode="glitchHover" translationKey="button.addToCart" />}
          </div>
        </div>
      </div>
    </li>
  );
}
