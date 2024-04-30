"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getLocaleFromPath } from "@/services/utils";

interface IProps {
  href: string;
  className?: string;
  role?: string;
  children: React.ReactNode;
}

export function LocaleLink({
  href,
  children,
  className,
  role
}: IProps) {
  const pathName = usePathname();
  const locale = getLocaleFromPath(pathName);
  const path = `/${locale}${href}`;

  return (
    <Link
      href={path}
      className={className}
      role={role}
    >
      {children}
    </Link>
  )
}
