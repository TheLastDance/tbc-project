import "./Navigation.css"
import { NavLink } from "../NavLink/NavLink";
import { TranslateText } from "../TranslateText/TranslateText";

export function Navigation() {
  //const locale = cookies().get("locale").value;

  return (
    <nav>
      <ul className='nav_list'>
        <li><NavLink href="/profile"><TranslateText translationKey="navigation.profile" /></NavLink></li>
        <li><NavLink href="/blog"><TranslateText translationKey="navigation.blog" /></NavLink></li>
        <li><NavLink href="/contact"><TranslateText translationKey="navigation.contact" /></NavLink></li>
      </ul>
    </nav>
  )
}
