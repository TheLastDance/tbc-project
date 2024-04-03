import "./Footer.css"
import { Navigation } from "../Navigation/Navigation"
import Link from "next/link"
import NewsletterForm from "../Forms/NewsletterForm/NewsletterForm"

export function Footer() {
  return (
    <footer className='footer'>

      <div className="footer_links">
        <Navigation />

        <ul>
          <li>
            <Link href="/">Terms and conditions</Link>
          </li>
          <li>
            <Link href="/">Privacy politics</Link>
          </li>
        </ul>
      </div>

      <NewsletterForm />
    </footer>
  )
}
