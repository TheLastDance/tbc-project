import { BlogList } from "@/components/Blog/BlogList/BlogList"
import { Suspense } from "react";
import { FullPostLoader } from "@/components/Loaders/FullPostLoader/FullPostLoader";

export const revalidate = 0;

export default async function Blog() {

  return (
    <>
      <Suspense fallback={<FullPostLoader />}>
        <BlogList />
      </Suspense>
    </>
  )
}
