import { useState, useEffect } from "react";

export function useDebounce(searchText: string) {
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    const debounce = setTimeout(() => {
      setDebouncedValue(searchText);
    }, 1000);

    return () => clearTimeout(debounce);
  }, [searchText]);

  return debouncedValue;
}