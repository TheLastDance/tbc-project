import "./FullProduct.css";
import notFound from "@/app/[locale]/not-found";
import { TranslateTextServer } from "@/components/TranslateText/TranslateTextServer";
import { CartIncrementButton } from "@/components/CartList/Buttons/CartIncrementButton";
import { Gallery } from "@/components/Gallery/Gallery";
import { getProduct } from "@/services/sqlQueries/products/getProduct";
import { StarRate } from "@/components/StarRate/StarRate";
import { getProductRating } from "@/services/sqlQueries/starRating/getProductRating";
import { ShareButtons } from "@/components/ShareButtons/ShareButtons";

export const revalidate = 0;

export async function FullProduct({ id }: idParam) {
  //await new Promise((res) => setTimeout(res, 2000)); //for loader check
  const data = await getProduct(id) as IProductItem;
  const rating = await getProductRating(id) as IProductRating;

  if (!data?.title) return notFound();

  const { title, description, brand, category, price, gender, images } = data;

  return (
    <article className="fullProduct">
      <Gallery images={images} />
      <div className="fullProduct_info">
        <h1>{title}</h1>
        <p>
          <span>
            <TranslateTextServer translationKey="fullProduct.brand" />:
          </span>{" "}
          {brand}
        </p>
        <p>
          <span>
            <TranslateTextServer translationKey="fullProduct.category" />:
          </span>{" "}
          {category}
        </p>
        <p>
          <span>
            <TranslateTextServer translationKey="fullProduct.gender" />:
          </span>{" "}
          {gender}
        </p>
        <p>
          <span>
            <TranslateTextServer translationKey="fullProduct.description" />:
          </span>{" "}
          {description}
        </p>
        <div className="starRating">
          <span>
            <TranslateTextServer translationKey="fullProduct.rating" />
          </span>
          <StarRate product_id={id} rating={rating} />
        </div>
        <p className="fullProduct_info_price">
          {price}
          <span> $</span>{" "}
        </p>
        <div className="button_container">
          <ShareButtons title={title} />
          <CartIncrementButton item={data} mode="glitch" translationKey="button.addToCart" />
        </div>
      </div>
    </article>
  );
}
