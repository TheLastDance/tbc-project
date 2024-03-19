import "./Footer.css"
import { Navigation } from "../Navigation/Navigation"
import { Input } from "../Input/Input"
import { Link } from "react-router-dom"

export function Footer() {
  return (
    <footer className='footer'>

      <div className="footer_links">
        <Navigation />

        <ul>
          <li>
            <Link to="/">Terms and conditions</Link>
          </li>
          <li>
            <Link to="/">Privacy politics</Link>
          </li>
        </ul>
      </div>

      <form onSubmit={(e) => e.preventDefault()}>
        <Input
          label="Subscribe to our newsletter:"
          type="email"
          placeholder="Email"
          id="footer_email_input"
          name="email"
          required
        />
        <button type='submit'>Submit</button>
      </form>
    </footer>
  )
}
