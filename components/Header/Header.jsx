import "./Header.css";
import { Navigation } from "../Navigation/Navigation";
import Link from "next/link";

export function Header() {
  return (
    <header>
      <div className="header_logo">
        <Link href="/">LOGO</Link>
      </div>
      <Navigation />
    </header>
  )
}
