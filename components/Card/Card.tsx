import "./Card.css";

export function Card({ children }: ChildrenProps) {
  return <li className="card">{children}</li>;
}
