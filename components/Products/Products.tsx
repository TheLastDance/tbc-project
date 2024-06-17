import "./Products.css";
import { ProductsList } from "./ProductsList/ProductsList";
import { Heading } from "../UI/GlitchEffects/Heading/Heading";
import { TranslateText } from "../TranslateText/TranslateText";
import { PaginationUI } from "../Pagination/Pagination";
import { getProducts } from "@/services/sqlQueries/products/getProducts";
import { ProductFilters } from "./Filters/ProductFilters/ProductFilters";
import { SortByTitles } from "@/enums";

interface IProps {
  params: IProductParams['searchParams'],
  admin?: boolean,
}

export const revalidate = 0;

export async function Products({ params, admin }: IProps) {
  const products = await getProducts() as IProductItem[];
  const searchText = params?.searchText || '';
  const page = Number(params?.page) || 1;
  const categoryArray = params?.category ? params?.category.split(",") : [];
  const brandArray = params?.brand ? params?.brand.split(",") : [];
  const genderArray = params?.gender ? params?.gender.split(",") : [];
  const priceArray = params?.price ? params?.price.split(",") : [];
  const sortBy = params?.sortBy || '';
  const { TitleAsc, TitleDesc, PriceAsc, PriceDesc } = SortByTitles;

  const filteredProducts = products.filter(({ title, category, brand, gender, price }) => {
    return (
      (searchText ? title.toLowerCase().includes(searchText.toLowerCase()) : true) &&
      (categoryArray.length ? categoryArray.includes(category) : true) &&
      (brandArray.length ? brandArray.includes(brand) : true) &&
      (genderArray.length ? genderArray.includes(gender) : true) &&
      (priceArray.length && !isNaN(+priceArray[0]) && !isNaN(+priceArray[1]) ? price >= +priceArray[0] && price <= +priceArray[1] : true)
    )
  });

  const sortedData = [...filteredProducts].sort((a, b) => {
    if (sortBy === TitleAsc) return a.title.localeCompare(b.title);

    if (sortBy === TitleDesc) return b.title.localeCompare(a.title);

    if (sortBy === PriceAsc) return a.price - b.price;

    if (sortBy === PriceDesc) return b.price - a.price;

    return 0;
  });

  const paginatedProducts = sortedData.slice(12 * (page - 1), page * 12);

  return (
    <>
      <section className="products">
        <h2><Heading translationKey="products" /></h2>
        <div className="filtersAndProducts">
          <div className="filtersAndProducts_filters">
            <ProductFilters />
          </div>
          <div className="filtersAndProducts_products">
            <ProductsList products={paginatedProducts} admin={admin} />
            {!paginatedProducts.length ? <TranslateText translationKey="products.notFound" /> : null}
            <PaginationUI totalPages={sortedData.length} size={12} />
          </div>
        </div>
      </section>
    </>
  );
}
