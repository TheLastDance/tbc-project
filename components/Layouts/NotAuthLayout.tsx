import { NotAuthHeader } from "../Headers/NotAuthHeader/NotAuthHeader"
import { NotAuthFooter } from "../Footers/NotAuthFooter/NotAuthFooter"

export function NotAuthLayout({ children }: ChildrenProps) {
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
