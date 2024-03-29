import "./ProductList.css"
import { Product } from "./Product/Product";

export function ProductsList({ products }) {
  return (
    <section id="products">
      <h2>Products:</h2>
      <ul className='products_list'>
        {products.map((item) =>
          <Product
            key={item.id}
            item={item}
          />
        )}
      </ul>
    </section>
  )
}
