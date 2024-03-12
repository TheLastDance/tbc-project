import "./Product.css"
import { Card } from "../../Card/Card"

export function Product({ item }) {
  const { name, description } = item;

  return (
    <Card>
      <h3>{name}</h3>
      <p>{description}</p>
      <button type='button'>Add to Cart</button>
    </Card>
  )
}
