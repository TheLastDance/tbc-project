import { Products } from "@/components/Products/Products";

export default async function ProductsPage({ searchParams }: IProductParams) {

  return (
    <>
      <Products params={searchParams} />
    </>
  );
}
