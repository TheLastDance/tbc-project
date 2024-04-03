import "./Navigation.css"
import { NavLink } from "../NavLink/NavLink"

export function Navigation() {
  return (
    <nav>
      <ul className='nav_list'>
        <li><NavLink href="/profile">Profile</NavLink></li>
        <li><NavLink href="/blog">Blog</NavLink></li>
        <li><NavLink href="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  )
}
