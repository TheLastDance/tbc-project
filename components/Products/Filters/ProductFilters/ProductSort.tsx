"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation"
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { SortByTitles } from "@/enums";
import { TranslateText } from "@/components/TranslateText/TranslateText";

export function ProductSort() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const { Relevant, TitleAsc, TitleDesc, PriceAsc, PriceDesc } = SortByTitles;
  const sortBy = searchParams.get('sortBy') || Relevant;
  const [selectedSortBy, setSelectedSortBy] = useState(sortBy);

  const handleSelect = (term: string) => {
    setSelectedSortBy(term);
  }

  const handleSetSort = useDebouncedCallback(() => {
    const params = new URLSearchParams(searchParams);

    if (selectedSortBy !== Relevant) {
      params.set("sortBy", `${selectedSortBy}`);
    } else {
      params.delete("sortBy");
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, 1000)


  const handleSortBy = (term: string) => {
    handleSelect(term);
    handleSetSort();
  }

  return (
    <div className="select-style-input">
      <label htmlFor="sortBy">
        <h3><TranslateText translationKey="products.sort.sortBy" /></h3>
      </label>

      <select
        id="sortBy"
        onChange={(e) => handleSortBy(e.target.value)}
        defaultValue={sortBy}
      >
        <option value={Relevant}>
          <TranslateText translationKey="products.sort.relevant" />
        </option>
        <option value={TitleAsc}>
          <TranslateText translationKey="products.sort.name-A-Z" />
        </option>
        <option value={TitleDesc}>
          <TranslateText translationKey="products.sort.name-Z-A" />
        </option>
        <option value={PriceAsc}>
          <TranslateText translationKey="products.sort.price-L-H" />
        </option>
        <option value={PriceDesc}>
          <TranslateText translationKey="products.sort.price-H-L" />
        </option>
      </select>
    </div>
  )
}
