import "./MainPage.css";
import { ProductsList } from "../../components/ProductsList/ProductsList"
import { BlogList } from "../../components/BlogList/BlogList";
import { Input } from "../../components/Input/Input";

export function MainPage() {
  return (
    <div className="mainPage">
      <form onSubmit={(e) => e.preventDefault()}>
        <Input
          label="Search product:"
          type="search"
          name="search"
          id="mainPage_search_input"
          required
        />
        <button type='submit'>Search</button>
      </form>
      <ProductsList />
      <BlogList />
    </div>
  )
}
