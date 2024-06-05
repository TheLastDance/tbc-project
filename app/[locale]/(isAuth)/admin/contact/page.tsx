import { getMessages } from "@/services/sqlQueries/contact/getMessages"
import { Suspense } from "react";
import { MessagesTable } from "@/components/Tables/MessagesTable/MessagesTable";
import { Loader } from "@/components/Loaders/Loader/Loader";

export const revalidate = 0;

export default async function AdminContact() {
  const messages = await getMessages() as IMessage[];

  return (
    <>
      <Suspense fallback={<Loader />}>
        <MessagesTable messages={messages} />
      </Suspense>
    </>
  )
}
