"use client"

import "./Search.css";
import { Input } from "../Input/Input";
import { TranslateText } from "../TranslateText/TranslateText";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export function Search({
  inputID,
}: { inputID: string }) {
  const placeholderText = TranslateText({ translationKey: "button.search" });
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    if (term) {
      params.set('searchText', term);
    } else {
      params.delete('searchText');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 1000)

  return (
    <Input
      placeholder={placeholderText}
      type="search"
      name="search"
      id={inputID}
      onChange={(e) => handleSearch(e.target.value)}
      defaultValue={searchParams.get('searchText')?.toString()}
    />
  );
}
