import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer"

export function AuthLayout({ children }) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}
