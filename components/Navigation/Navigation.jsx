import "./Navigation.css"
import Link from "next/link"

export function Navigation() {
  return (
    <nav>
      <ul className='nav_list'>
        <li><Link href="/profile">Profile</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  )
}
