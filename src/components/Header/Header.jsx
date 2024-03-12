import "./Header.css";

export function Header() {
  return (
    <header>
      <div className="header_logo">
        <a href="/">LOGO</a>
      </div>
      <nav>
        <ul className='header_nav_list'>
          <li><a href="#about">About</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#footer">Rules</a></li>
        </ul>
      </nav>
    </header>
  )
}
