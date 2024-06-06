"use client"
import "./Pagination.css"
import { Button } from "../UI/Buttons/Button/Button";
import Pagination from "rc-pagination/lib/Pagination"
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useI18n } from "@/locales/client";

export function PaginationUI({ totalPages, size }: { totalPages: number, size: number }) {
  const t = useI18n()
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const currentPage = Number(searchParams.get('page')) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Pagination
      current={currentPage}
      pageSize={size}
      total={totalPages}
      showTitle={false}
      showTotal={(total, range) => <span>{range[0]}-{range[1]} {t("pagination.of")} {total} {t("pagination.items")}</span>}
      onChange={(current) => createPageURL(current)}
      prevIcon={<Button type="button" mode="glitchHover">{`<`}</Button>}
      nextIcon={<Button type="button" mode="glitchHover">{`>`}</Button>}
      showPrevNextJumpers={false}
      hideOnSinglePage={true}
    />
  )
}
