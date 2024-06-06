"use client"

import { Button } from "@/components/UI/Buttons/Button/Button"
import { useSearchParams, useRouter, usePathname } from "next/navigation";

export function SortButton({ isAsc }: { isAsc: boolean }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSort = () => {
    const params = new URLSearchParams(searchParams);
    params.set("isAsc", `${isAsc}`)
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <Button
      type="button"
      onClick={handleSort}
      mode="glitchHover"
      translationKey={isAsc ? "products.sort-Z-A" : "products.sort-A-Z"}
    />
  )
}
