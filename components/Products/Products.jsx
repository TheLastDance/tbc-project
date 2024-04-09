"use client"

import "./Products.css"
import { useState, useEffect } from "react";
import { Search } from "../Search/Search";
import { ProductsList } from "./ProductsList/ProductsList";
import { handleFetch } from "@/utils";

export function Products() {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isAscending, setIsAscending] = useState(true);
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    const handleProductsFetch = async () => {
      const data = await handleFetch("https://dummyjson.com/products");
      setProducts(data.products);
    }
    handleProductsFetch();
  }, [])

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
      {products.length ? (
        <section className="products">
          <Search
            inputID="mainPage_search_input"
            inputValue={searchText}
            handleInputChange={(e) => setSearchText(e.target.value)}
            handleButtonClick={() => setIsAscending(prev => !prev)}
            buttonContent={`Sort ${isAscending ? "Z-A" : "A-Z"}`}
          />
          <h2>Products:</h2>
          <ProductsList products={sortedData} />
          {!sortedData.length ? <p>No products found!</p> : null}
        </section>
      ) : null}
    </>
  )
}
