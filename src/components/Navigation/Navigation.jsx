import "./Navigation.css"
import { NavLink } from "react-router-dom"

export function Navigation() {
  return (
    <nav>
      <ul className='nav_list'>
        <li><NavLink to="/profile">Profile</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  )
}
