"use client"

import "./Products.css"
import { useState, useEffect } from "react";
import { Search } from "../Search/Search";
import { ProductsList } from "./ProductsList/ProductsList";
import { TranslateText } from "../TranslateText/TranslateText";

export function Products({ data }) {
  const [searchText, setSearchText] = useState("");
  const [isAscending, setIsAscending] = useState(true);
  const [debouncedValue, setDebouncedValue] = useState("");
  const { products } = data;

  // debouncing
  useEffect(() => {
    const debounce = setTimeout(() => {
      setDebouncedValue(searchText);
    }, 1000)

    return () => clearTimeout(debounce);
  }, [searchText])

  const filteredProducts = products.filter(({ title }) => title.toLowerCase().includes(debouncedValue.toLowerCase()));

  // will use useMemo in future, after lecture about optimization
  // Products will be sorted by default, and if additional details are provided in the technical requirements, the functionality may be modified accordingly.
  const sortedData = isAscending
    ? [...filteredProducts].sort((a, b) => a.title === b.title ? 0 : a.title < b.title ? -1 : 1)
    : [...filteredProducts].sort((a, b) => a.title === b.title ? 0 : a.title < b.title ? 1 : -1)

  return (
    <>
      <section className="products">
        <Search
          inputID="mainPage_search_input"
          inputValue={searchText}
          handleInputChange={(e) => setSearchText(e.target.value)}
          handleButtonClick={() => setIsAscending(prev => !prev)}
          buttonContent={
            isAscending ?
              <TranslateText translationKey="products.sort-Z-A" /> :
              <TranslateText translationKey="products.sort-A-Z" />
          }
        />
        <h2><TranslateText translationKey="products" /></h2>
        <ProductsList products={sortedData} />
        {!sortedData.length ? <p>No products found!</p> : null}
      </section>
    </>
  )
}
