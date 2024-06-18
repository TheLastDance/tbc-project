import "./Card.css";

export function Card({ children }: ChildrenProps) {
  return <div className="card">
    <div className="card_border_1"></div>
    <div className="card_content">
      {children}
    </div>
    <div className="card_border_2"></div>
  </div>;
}
