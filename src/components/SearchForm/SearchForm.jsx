import "./SearchForm.css"
import { Input } from "../Input/Input"

export function SearchForm({ inputID }) {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>

      <Input
        placeholder="Search product:"
        type="search"
        name="search"
        id={inputID}
        required
      />
      <button type='submit'>Search</button>

    </form>
  )
}
