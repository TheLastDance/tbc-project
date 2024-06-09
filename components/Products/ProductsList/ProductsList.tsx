
import "./ProductsList.css";
import { Product } from "./Product/Product";

interface IProps {
  products: IProductItem[];
  admin?: boolean,
}

export function ProductsList({ products, admin }: IProps) {

  return (
    <ul className="products_list">
      {products.map((item, index) => (
        <Product key={item.id} item={item} index={index} admin={admin} />
      ))}
    </ul>
  );
}
