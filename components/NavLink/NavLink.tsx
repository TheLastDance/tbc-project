"use client"

import Link from "next/link";
import { getLocaleFromPath } from "@/services/utils";
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
  const locale = getLocaleFromPath(pathName);
  const path = `/${locale}${href}`;

  return (
    <Link
      href={href}
      className={pathName == path ? "navLink_active" : "navLink"}
      {...props}
    >
      {children}
    </Link>
  )
}
