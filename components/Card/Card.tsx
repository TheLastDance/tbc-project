import "./Card.css";

export function Card({ children }: CardProps) {
  return <li className="card">{children}</li>;
}
