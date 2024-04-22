import "./FullProduct.css"
import { getAnyData } from "@/services/data-fetch/getAnyData";
import notFound from "@/app/not-found";
import Image from "next/image";
import { TranslateText } from "@/components/TranslateText/TranslateText";

export async function FullProduct({ id }) {
  //await new Promise((res) => setTimeout(res, 2000)); //for loader check
  const data = await getAnyData(`https://dummyjson.com/products/${id}`);

  if (!data.title) return notFound();

  const { title, description, brand, category, rating, price, thumbnail } = data;

  return (
    <article className="fullProduct">
      <div className="fullProduct_info">
        <h1>{title}</h1>
        <p><span><TranslateText translationKey="fullProduct.brand" /> </span>{brand}</p>
        <p><span><TranslateText translationKey="fullProduct.category" /> </span> {category}</p>
        <p><span><TranslateText translationKey="fullProduct.description" /> </span> {description}</p>
        <p><span><TranslateText translationKey="fullProduct.rating" /> ⭐</span> {rating}</p>
        <p className="fullProduct_info_price">{price}<span> $</span> </p>
        <button type='button'>
          <TranslateText translationKey="button.addToCart" />
        </button>
      </div>
      <div className="fullProduct_imageContainer">
        <Image
          src={thumbnail}
          alt={title}
          width={400}
          height={650}
          priority
        />
      </div>
    </article>
  )
}
