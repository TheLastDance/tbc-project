"use client";

import "./Products.css";
import { useState, useMemo } from "react";
import { Search } from "../Search/Search";
import { ProductsList } from "./ProductsList/ProductsList";
import { Heading } from "../UI/GlitchEffects/Heading/Heading";
import { Button } from "../UI/Buttons/Button/Button";
import { TranslateText } from "../TranslateText/TranslateText";

interface IProps {
  data: {
    products: IProductItem[],
  };
  searchText: string,
}

export function Products({ data, searchText }: IProps) {
  const [isAscending, setIsAscending] = useState(true);
  const { products } = data;

  const filteredProducts = products.filter(({ title }) => title.toLowerCase().includes(searchText.toLowerCase()));

  // Products will be sorted by default, and if additional details are provided in the technical requirements, the functionality may be modified accordingly.
  const sortedData = useMemo(() => isAscending
    ? [...filteredProducts].sort((a, b) => (a.title === b.title ? 0 : a.title < b.title ? -1 : 1))
    : [...filteredProducts].sort((a, b) => (a.title === b.title ? 0 : a.title < b.title ? 1 : -1))
    , [isAscending, filteredProducts])

  return (
    <>
      <section className="products">
        <div className="searchForm">
          <Search inputID="mainPage_search_input" />
          <Button
            type="button"
            onClick={() => setIsAscending((prev) => !prev)}
            mode="glitchHover"
            translationKey={isAscending ? "products.sort-Z-A" : "products.sort-A-Z"}
          />
        </div>
        <Heading level={2} translationKey="products" />
        <ProductsList products={sortedData} />
        {!sortedData.length ? <TranslateText translationKey="products.notFound" /> : null}
      </section>
    </>
  );
}
