import "./MainPage.css";
import { ProductsList } from "../../components/ProductsList/ProductsList"
import { SearchForm } from "../../components/Forms/SearchForm/SearchForm";

export function MainPage() {
  return (
    <div className="mainPage">
      <SearchForm inputID="mainPage_search_input" />
      <ProductsList />
    </div>
  )
}
