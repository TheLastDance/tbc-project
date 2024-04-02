import "./Layout.css"
import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer"

export function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}
