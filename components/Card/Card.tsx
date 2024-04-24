import "./Card.css";

export function Card({ children }: childrenType) {
  return <li className="card">{children}</li>;
}
