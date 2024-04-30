import { FullProduct } from "@/components/Products/FullProduct/FullProduct";


export default function FullProductPage({ params: { id } }: IIdParamProps) {
  return (
    <>
      <FullProduct id={id} />
    </>
  );
}
