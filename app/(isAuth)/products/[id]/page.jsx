import { FullProduct } from "@/components/Products/FullProduct/FullProduct"

export default function FullProductPage({ params: { id } }) {
  return (
    <>
      <FullProduct id={id} />
    </>
  )
}
