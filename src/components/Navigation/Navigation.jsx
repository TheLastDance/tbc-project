import "./Navigation.css"
import { NavLink } from "react-router-dom"

export function Navigation() {
  return (
    <nav>
      <ul className='nav_list'>
        <li><a href="#products">Products</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  )
}
