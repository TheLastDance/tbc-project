import "./Header.css";
import { Navigation } from "../Navigation/Navigation";

export function Header() {
  return (
    <header>
      <div className="header_logo">
        <a href="/">LOGO</a>
      </div>
      <Navigation />
    </header>
  )
}
