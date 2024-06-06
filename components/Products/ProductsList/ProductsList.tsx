
import "./ProductsList.css";
import { Product } from "./Product/Product";

interface IProps {
  products: IProductItem[];
}

export function ProductsList({ products }: IProps) {

  return (
    <ul className="products_list">
      {products.map((item, index) => (
        <Product key={item.id} item={item} index={index} />
      ))}
    </ul>
  );
}
