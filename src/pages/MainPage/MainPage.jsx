import "./MainPage.css";
import { useState } from "react";
import { ProductsList } from "../../components/ProductsList/ProductsList"
import { SearchForm } from "../../components/Forms/SearchForm/SearchForm";
import { products as data } from "../../data/products";

export function MainPage() {
  const [products, setProducts] = useState(data);

  return (
    <div className="mainPage">
      <SearchForm
        inputID="mainPage_search_input"
        data={products}
        setData={setProducts}
      />
      <ProductsList products={products} />
    </div>
  )
}
