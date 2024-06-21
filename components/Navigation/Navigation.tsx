import "./Navigation.css"
import { NavLink } from "../Links/NavLink/NavLink";
import { TranslateText } from "../TranslateText/TranslateText";
import { Claims } from "@auth0/nextjs-auth0";
import { Card } from "../Card/Card";

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
            <Card>
              <TranslateText translationKey="navigation.admin" />
            </Card>
          </NavLink>
        </li>}

        {user && <li className="profile_link">
          <NavLink href="/profile" onClick={onClick}>
            <Card>
              <TranslateText translationKey="navigation.profile" />
            </Card>
          </NavLink>
        </li>}

        <li>

          <NavLink href="/products" onClick={onClick}>
            <Card>
              <TranslateText translationKey="products" />
            </Card>
          </NavLink>
        </li>
        <li>
          <NavLink href="/blog" onClick={onClick}>
            <Card>
              <TranslateText translationKey="navigation.blog" />
            </Card>
          </NavLink>
        </li>
        <li>
          <NavLink href="/contact" onClick={onClick}>
            <Card>
              <TranslateText translationKey="navigation.contact" />
            </Card>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
