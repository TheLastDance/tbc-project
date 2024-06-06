import { Suspense } from "react";
import { MessagesTable } from "@/components/Tables/MessagesTable/MessagesTable";
import { Loader } from "@/components/Loaders/Loader/Loader";

export default function AdminContact({ searchParams }: ITableParams) {

  return (
    <>
      <Suspense fallback={<Loader />}>
        <MessagesTable params={searchParams} />
      </Suspense>
    </>
  )
}
