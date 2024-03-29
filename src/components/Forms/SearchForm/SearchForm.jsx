import "./SearchForm.css"
import { useState } from "react"
import { Input } from "../../Input/Input"

export function SearchForm({ inputID, data, setData }) {
  const [searchText, setSearchText] = useState("");
  const [isAscSorting, setIsAscSorting] = useState(true);

  const handleSort = () => {
    const sortedData = isAscSorting
      ? [...data].sort((a, b) => b.id - a.id)
      : [...data].sort((a, b) => a.id - b.id);
    setData(sortedData);
    setIsAscSorting(prev => !prev);
  }

  return (
    <div className="searchForm">

      <Input
        placeholder="Search product:"
        type="search"
        name="search"
        id={inputID}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button type='button' onClick={handleSort}>Sort {isAscSorting ? "DESC" : "ASC"}</button>

    </div>
  )
}
