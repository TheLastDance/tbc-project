import "./ProductsList.css"
import { Product } from "./Product/Product"

export function ProductsList({ products }) {
  return (
    <ul className='products_list'>
      {products.map((item, index) =>
        <Product
          key={item.id}
          item={item}
          index={index}
        />
      )}
    </ul>
  )
}
