import "./Card.css"

export function Card({ children }) {
  return (
    <li className="card">
      {children}
    </li>
  )
}
