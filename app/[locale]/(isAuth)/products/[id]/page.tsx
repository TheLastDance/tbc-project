import { FullProduct } from "@/components/Products/FullProduct/FullProduct";

interface Props {
  params: {
    id: number;
  };
}

export default function FullProductPage({ params: { id } }: Props) {
  return (
    <>
      <FullProduct id={id} />
    </>
  );
}
