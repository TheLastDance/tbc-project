import "./Products.css";
import { Search } from "../Search/Search";
import { ProductsList } from "./ProductsList/ProductsList";
import { Heading } from "../UI/GlitchEffects/Heading/Heading";
import { TranslateText } from "../TranslateText/TranslateText";
import { PaginationUI } from "../Pagination/Pagination";
import { SortButton } from "./Filters/SortButton";
import { getProducts } from "@/services/sqlQueries/products/getProducts";

interface IProps {
  params: IProductParams['searchParams'],
  admin?: boolean,
}

export const revalidate = 0;

export async function Products({ params, admin }: IProps) {
  const products = await getProducts() as IProductItem[];
  const searchText = params?.searchText || '';
  const isAsc = params?.isAsc === "true" ? false : true;
  const page = Number(params?.page) || 1;

  const filteredProducts = products.filter(({ title }) => title.toLowerCase().includes(searchText.toLowerCase()));

  const sortedData = isAsc
    ? [...filteredProducts].sort((a, b) => (a.title === b.title ? 0 : a.title < b.title ? -1 : 1))
    : [...filteredProducts].sort((a, b) => (a.title === b.title ? 0 : a.title < b.title ? 1 : -1))

  const paginatedProducts = sortedData.slice(12 * (page - 1), page * 12);

  return (
    <>
      <section className="products">
        <div className="searchForm">
          <Search inputID="mainPage_search_input" />
          <SortButton isAsc={isAsc} />
        </div>
        <Heading level={2} translationKey="products" />
        <ProductsList products={paginatedProducts} admin={admin} />
        {!paginatedProducts.length ? <TranslateText translationKey="products.notFound" /> : null}
        <PaginationUI totalPages={sortedData.length} size={12} />
      </section>
    </>
  );
}
