import { NotAuthHeader } from "../Headers/NotAuthHeader/NotAuthHeader"
import { NotAuthFooter } from "../Footers/NotAuthFooter/NotAuthFooter"

export function NotAuthLayout({ children } : {children: React.ReactNode}) {
  return (
    <>
      <NotAuthHeader />
      <main>
        {children}
      </main>
      <NotAuthFooter />
    </>
  )
}
