"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";


export function NavLink({
  href,
  children,
  ...props
}: NavLinkInterface) {

  const pathname = usePathname()

  return (
    <Link
      href={href}
      className={pathname === href ? "navLink_active" : "navLink"}
      {...props}
    >
      {children}
    </Link>
  )
}
