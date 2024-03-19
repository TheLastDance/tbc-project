import "./Header.css";
import { Navigation } from "../Navigation/Navigation";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <div className="header_logo">
        <Link to="/">LOGO</Link>
      </div>
      <Navigation />
    </header>
  )
}
