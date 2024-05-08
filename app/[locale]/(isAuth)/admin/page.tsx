import { UsersTable } from "@/components/UsersTable/UserTable";
import { AddUserButton } from "@/components/Buttons/AddUserButton/AddUserButton";
import { Suspense } from "react";
import { Loader } from "@/components/Loaders/Loader/Loader";
import { setStaticParamsLocale } from "next-international/server";

export const revalidate = 0;
export default async function Test({ params: { locale } }: ILocaleParam) {
  setStaticParamsLocale(locale)

  return (
    <>
      <AddUserButton />
      <Suspense fallback={<Loader />}>
        <UsersTable />
      </Suspense>
    </>
  )
}
