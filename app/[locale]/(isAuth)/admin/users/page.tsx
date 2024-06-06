import { UsersTable } from "@/components/Tables/UsersTable/UserTable";
import { Suspense } from "react";
import { Loader } from "@/components/Loaders/Loader/Loader";
import { setStaticParamsLocale } from "next-international/server";

interface IProps {
  params: ILocaleParam["params"],
  searchParams: ITableParams["searchParams"],
}

export const revalidate = 0;

export default async function Admin({ params: { locale }, searchParams }: IProps) {
  setStaticParamsLocale(locale)

  return (
    <>
      <Suspense fallback={<Loader />}>
        <UsersTable params={searchParams} />
      </Suspense>
    </>
  )
}