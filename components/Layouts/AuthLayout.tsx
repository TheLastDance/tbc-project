import { AuthHeader } from "../Headers/AuthHeader/AuthHeader"
import { AuthFooter } from "../Footers/AuthFooter/AuthFooter"

export function AuthLayout({ children }: ChildrenProps) {
  return (
    <>
      <AuthHeader />
      <main>
        {children}
      </main>
      <AuthFooter />
    </>
  )
}
