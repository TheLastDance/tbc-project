import "./ArrowNavigation.css";
import Link from "next/link";

export function ArrowNavigation({ hrefPrev, hrefNext }) {
  return (
    <nav className="arrow_navigation">
      <Link href={hrefPrev}>⬅ PREVIOUS</Link>
      <Link href={hrefNext}>NEXT ➡</Link>
    </nav>
  )
}
