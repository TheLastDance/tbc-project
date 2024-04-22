import "./Search.css"
import { Input } from "../Input/Input"
import { TranslateText } from "../TranslateText/TranslateText";

export function Search({
  inputID,
  buttonContent,
  inputValue,
  handleInputChange,
  handleButtonClick
}) {
  const placeholderText = TranslateText({ translationKey: "button.search" });

  return (
    <div className="searchForm">

      <Input
        placeholder={placeholderText}
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
