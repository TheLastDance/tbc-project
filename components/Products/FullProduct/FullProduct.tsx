import "./FullProduct.css";
import notFound from "@/app/[locale]/not-found";
import { TranslateTextServer } from "@/components/TranslateText/TranslateTextServer";
import { CartIncrementButton } from "@/components/CartList/Buttons/CartIncrementButton";
import { Gallery } from "@/components/Gallery/Gallery";
import { getProduct } from "@/services/sqlQueries/products/getProduct";

export const revalidate = 0;

export async function FullProduct({ id }: idParam) {
  //await new Promise((res) => setTimeout(res, 2000)); //for loader check
  const data = await getProduct(id) as IProductItem;

  if (!data?.title) return notFound();

  const { title, description, brand, category, price, gender, images } = data;

  return (
    <article className="fullProduct">
      <Gallery images={images} />
      <div className="fullProduct_info">
        <h1>{title}</h1>
        <p>
          <span>
            <TranslateTextServer translationKey="fullProduct.brand" />{" "}
          </span>
          {brand}
        </p>
        <p>
          <span>
            <TranslateTextServer translationKey="fullProduct.category" />{" "}
          </span>{" "}
          {category}
        </p>
        <p>
          <span>
            <TranslateTextServer translationKey="fullProduct.gender" />{" "}
          </span>{" "}
          {gender}
        </p>
        <p>
          <span>
            <TranslateTextServer translationKey="fullProduct.description" />{" "}
          </span>{" "}
          {description}
        </p>
        <p>
          <span>
            <TranslateTextServer translationKey="fullProduct.rating" /> ⭐
          </span>{" "}
          {5}
        </p>
        <p className="fullProduct_info_price">
          {price}
          <span> $</span>{" "}
        </p>
        <div className="button_container">
          <CartIncrementButton item={data} mode="glitch" translationKey="button.addToCart" />
        </div>
      </div>
    </article>
  );
}
