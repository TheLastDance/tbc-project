import "./ProductsList.css";
import { Product } from "./Product/Product";

interface Props {
  products: SingleShopItem[];
}

export function ProductsList({ products }: Props) {
  return (
    <ul className="products_list">
      {products.map((item, index) => (
        <Product key={item.id} item={item} index={index} />
      ))}
    </ul>
  );
}
