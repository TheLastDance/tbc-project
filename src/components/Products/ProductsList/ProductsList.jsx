import "./ProductsList.css"
import { Product } from "../Product/Product"

export function ProductsList({ products }) {
  return (
    <ul className='products_list'>
      {products.map((item) =>
        <Product
          key={item.id}
          item={item}
        />
      )}
    </ul>
  )
}
