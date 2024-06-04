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
  onClick,
  ...props
}: IProps) {
  const pathName = usePathname();

  return (
    <Link
      href={href}
      className={pathName.startsWith(href) ? "navLink_active" : "navLink"}
      onClick={onClick}
      {...props}
    >
      {children}
    </Link>
  )
}
