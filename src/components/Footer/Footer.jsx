import "./Footer.css"
import { Navigation } from "../Navigation/Navigation"

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
        <label htmlFor="email">Subscribe to our newsletter:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder='Email'
          required
        />
        <button type='submit'>Submit</button>
      </form>
    </footer>
  )
}
