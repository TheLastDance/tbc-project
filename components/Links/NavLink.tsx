"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

interface IProps {
  href: string,
  children: React.ReactNode,
  onClick?: () => void,
}

export function NavLink({
  href,
  children,
  ...props
}: IProps) {
  const pathName = usePathname();

  return (
    <Link
      href={href}
      className={pathName === href ? "navLink_active" : "navLink"}
      {...props}
    >
      {children}
    </Link>
  )
}
