import "./Search.css";
import { Input } from "../Input/Input";
import { TranslateText } from "../TranslateText/TranslateText";

export function Search({
  inputID,
  inputValue,
  handleInputChange,
}: ISearchProps) {
  const placeholderText = TranslateText({ translationKey: "button.search" });

  return (
    <Input
      placeholder={placeholderText}
      type="search"
      name="search"
      id={inputID}
      value={inputValue}
      onChange={handleInputChange}
    />
  );
}
