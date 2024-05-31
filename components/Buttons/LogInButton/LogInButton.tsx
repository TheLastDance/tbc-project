import "./LogInButton.css"

export function LogInButton() {
  return (
    <a
      href="/api/auth/login"
      className="login_button button"
    >
      Log In
    </a>
  )
}
