import { UserList } from "@/components/UserList/UserList";
import { AddUserButton } from "@/components/Buttons/AddUserButton/AddUserButton";
import { Suspense } from "react";
import { Loader } from "@/components/Loaders/Loader/Loader";

export default async function Test() {

  return (
    <>
      <AddUserButton />
      <Suspense fallback={<Loader />}>
        <UserList />
      </Suspense>
    </>
  )
}
