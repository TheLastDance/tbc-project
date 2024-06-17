"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation"
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { SortByTitles } from "@/enums";

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

    replace(`${pathname}?${params.toString()}`);
  }, 1000)


  const handleSortBy = (term: string) => {
    handleSelect(term);
    handleSetSort();
  }

  return (
    <div className="select-style-input">
      <label htmlFor="sortBy">
        <h3>Sort By</h3>
      </label>

      <select
        id="sortBy"
        onChange={(e) => handleSortBy(e.target.value)}
        defaultValue={sortBy}
      >
        <option value={Relevant}>Most relevant</option>
        <option value={TitleAsc}>Name: A to Z</option>
        <option value={TitleDesc}>Name: Z to A</option>
        <option value={PriceAsc}>Price: Low to High</option>
        <option value={PriceDesc}>Price: High to Low</option>
      </select>
    </div>
  )
}
