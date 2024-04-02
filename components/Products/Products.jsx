"use client"

import "./Products.css"
import { useState, useEffect } from "react";
import { Search } from "../Search/Search";
import { ProductsList } from "./ProductsList/ProductsList";
import { products as data } from "@/data/products";

export function Products() {
  const [products, setProducts] = useState(data);
  const [searchText, setSearchText] = useState("");
  const [isAscending, setIsAscending] = useState(true);

  // debouncing
  useEffect(() => {
    const debounce = setTimeout(() => {
      const filtered = data.filter(({ name }) => name.toLowerCase().includes(searchText.toLowerCase()));
      setProducts(filtered);
    }, 1000)

    return () => clearTimeout(debounce);
  }, [searchText])

  // will use useMemo in future, after lecture about optimization
  // Products will be sorted by default, and if additional details are provided in the technical requirements, the functionality may be modified accordingly.
  const sortedData = isAscending
    ? [...products].sort((a, b) => a.name === b.name ? 0 : a.name < b.name ? -1 : 1)
    : [...products].sort((a, b) => a.name === b.name ? 0 : a.name < b.name ? 1 : -1)

  return (
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
  )
}
