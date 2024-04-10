

import "./FullProduct.css"
import { handleFetch } from "@/utils";
import notFound from "@/app/not-found";
import Image from "next/image";

export async function FullProduct({ id }) {
  const data = await handleFetch(`https://dummyjson.com/products/${id}`);

  if (!data) return notFound();

  const { title, description, brand, category, rating, price, thumbnail } = data;

  return (
    <article className="fullProduct">
      <div className="fullProduct_info">
        <h1>{title}</h1>
        <p><span>Brand: </span>{brand}</p>
        <p><span>Category: </span> {category}</p>
        <p><span>Description: </span> {description}</p>
        <p><span>Rating: ⭐</span> {rating}</p>
        <p className="fullProduct_info_price">{price}<span> $</span> </p>
        <button type='button'>Add to Cart</button>
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
