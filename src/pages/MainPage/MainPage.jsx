import "./MainPage.css";
import { ProductsList } from "../../components/ProductsList/ProductsList"
import { BlogList } from "../../components/BlogList/BlogList";

export function MainPage() {
  return (
    <div className="mainPage">
      <ProductsList />
      <BlogList />
    </div>
  )
}
