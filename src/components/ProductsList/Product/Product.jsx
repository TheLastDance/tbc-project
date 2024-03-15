import "./Product.css"
import { Card } from "../../Card/Card"

export function Product({ item }) {
  const { name, description, image } = item;

  return (
    <Card>
      <h3>{name}</h3>
      <img src={image} alt={name} />
      <p>{description}</p>
      <button type='button'>Add to Cart</button>
    </Card>
  )
}
