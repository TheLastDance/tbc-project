import "./SearchForm.css"
import { useState } from "react"
import { Input } from "../../Input/Input"

export function SearchForm({ inputID }) {
  const [searchText, setSearchText] = useState("");

  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>

      <Input
        placeholder="Search product:"
        type="search"
        name="search"
        id={inputID}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        required
      />
      <button type='submit'>Search</button>

    </form>
  )
}
