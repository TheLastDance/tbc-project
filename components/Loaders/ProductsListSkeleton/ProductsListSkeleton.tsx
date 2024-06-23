import "./ProductsListSkeleton.css"
import { ProductCardLoader } from "../ProductCardLoader/ProductCardLoader"

export function ProductsListSkeleton() {
  return (
    // <div className="productsListSkeleton_container">
    // <div className="skeleton_filter"></div>
    <div className="productsListSkeleton">
      {Array.from({ length: 10 }).map((_, index) => <ProductCardLoader key={index} />)}
    </div>
    // </div>
  )
}
