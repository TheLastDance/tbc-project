import "./Search.css"
import { Input } from "../Input/Input"

export function Search({
  inputID,
  buttonContent,
  inputValue,
  handleInputChange,
  handleButtonClick
}) {

  return (
    <div className="searchForm">

      <Input
        placeholder="Search:"
        type="search"
        name="search"
        id={inputID}
        value={inputValue}
        onChange={handleInputChange}
      />
      <button type='button' onClick={handleButtonClick}>{buttonContent}</button>

    </div>
  )
}
