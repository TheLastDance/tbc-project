import "./Navigation.css"
import { NavLink } from "../Links/NavLink/NavLink";
import { TranslateText } from "../TranslateText/TranslateText";
import { Claims } from "@auth0/nextjs-auth0";

interface IProps {
  user: IUser | Claims | undefined,
  onClick?: () => void,
}

export function Navigation({ user, onClick }: IProps) {
  const isAdmin = user?.app_metadata.role === "admin";

  return (
    <nav>
      <ul className='nav_list'>
        {isAdmin && <li>
          <NavLink href="/admin" onClick={onClick}>
            <TranslateText translationKey="navigation.admin" />
          </NavLink>
        </li>}

        {user && <li>
          <NavLink href="/profile" onClick={onClick}>
            <TranslateText translationKey="navigation.profile" />
          </NavLink>
        </li>}

        <li><NavLink href="/products" onClick={onClick}><TranslateText translationKey="products" /></NavLink></li>
        <li><NavLink href="/blog" onClick={onClick}><TranslateText translationKey="navigation.blog" /></NavLink></li>
        <li><NavLink href="/contact" onClick={onClick}><TranslateText translationKey="navigation.contact" /></NavLink></li>
      </ul>
    </nav>
  )
}
