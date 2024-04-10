import { FullPost } from "@/components/Blog/FullPost/FullPost"

export default function FullPostPage({ params: { id } }) {
  return (
    <>
      <FullPost id={id} />
    </>
  )
}