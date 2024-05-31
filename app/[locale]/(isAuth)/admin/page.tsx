import { UsersTable } from "@/components/UsersTable/UserTable";
import { Suspense } from "react";
import { Loader } from "@/components/Loaders/Loader/Loader";
import { setStaticParamsLocale } from "next-international/server";

export const revalidate = 0;
export default async function Test({ params: { locale } }: ILocaleParam) {
  setStaticParamsLocale(locale)

  return (
    <>
      <Suspense fallback={<Loader />}>
        <UsersTable />
      </Suspense>
    </>
  )
}
