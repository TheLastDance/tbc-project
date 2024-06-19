"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

interface IProps {
  href: string,
  children: React.ReactNode,
  noStartsWith?: boolean,
  onClick?: () => void,
}

export function NavLink({
  href,
  children,
  onClick,
  noStartsWith,
  ...props
}: IProps) {
  const pathName = usePathname();
  const sameLink = href === pathName;
  const mode = noStartsWith ? pathName === href : pathName.startsWith(href);

  return (
    <Link
      style={sameLink ? { pointerEvents: "none" } : undefined}
      href={href}
      className={mode ? "navLink_active" : "navLink"}
      onClick={onClick}
      {...props}
    >
      {children}
    </Link>
  )
}
