import ArrowNavigation from "@/components/ArrowNavigation/ArrowNavigation"

export default function NotFoundPost({ id }) {

  return (
    <>
      <div>404 not-found ☹</div>
      <ArrowNavigation
        hrefPrev={`/blog/${+id - 1}`}
        hrefNext={`/blog/${+id + 1}`}
      />
    </>
  )
}
