import { UsersTable } from "@/components/Tables/UsersTable/UserTable";
import { Suspense } from "react";
import { Loader } from "@/components/Loaders/Loader/Loader";
import { setStaticParamsLocale } from "next-international/server";

export const revalidate = 0;
export default async function Admin({ params: { locale } }: ILocaleParam) {
  setStaticParamsLocale(locale)

  return (
    <>
      <Suspense fallback={<Loader />}>
        <UsersTable />
      </Suspense>
    </>
  )
}