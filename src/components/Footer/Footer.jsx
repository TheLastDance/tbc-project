import "./Footer.css"
import { Navigation } from "../Navigation/Navigation"
import { Input } from "../Input/Input"

export function Footer() {
  return (
    <footer id='footer'>

      <div className="footer_links">
        <Navigation />

        <ul>
          <li>
            <a href="/">Terms and conditions</a>
          </li>
          <li>
            <a href="/">Privacy politics</a>
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
