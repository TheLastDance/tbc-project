import "./Products.css"
import { useState } from "react";
import { Search } from "../Search/Search";
import { ProductsList } from "./ProductsList/ProductsList";
import { products as data } from "../../data/products";

export function Products() {
  const [searchText, setSearchText] = useState("");
  const [isAscSorting, setIsAscSorting] = useState(false);

  const filteredData = data.filter(({ name }) => name.toLowerCase().includes(searchText.toLowerCase()));

  const sortedData = isAscSorting
    ? [...filteredData].sort((a, b) => b.id - a.id)
    : [...filteredData].sort((a, b) => a.id - b.id);

  return (
    <section className="products">
      <Search
        inputID="mainPage_search_input"
        inputValue={searchText}
        handleInputChange={(e) => setSearchText(e.target.value)}
        handleButtonClick={() => setIsAscSorting(prev => !prev)}
        buttonContent={`Sort ${isAscSorting ? "DESC" : "ASC"}`}
      />
      <h2>Products:</h2>
      <ProductsList products={sortedData} />
      {!filteredData.length ? <p>No products found</p> : null}
    </section>
  )
}
