
"use client"
import "./ProductFilters.css"
import { useSearchParams, usePathname, useRouter } from "next/navigation"
import { productBrands, productCategories, productGender } from "@/services/constants";
import { Input } from "@/components/Input/Input";
import { useState, Dispatch, SetStateAction } from "react";
import { useDebouncedCallback } from "use-debounce";
import { ProductSort } from "./ProductSort";
import { Search } from "@/components/Search/Search";

export function ProductFilters() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const price = searchParams.get('price') ? searchParams.get('price')!.split(",") : ['0', '100000'];
  const category = searchParams.get('category') ? searchParams.get('category')!.split(",") : [];
  const brand = searchParams.get('brand') ? searchParams.get('brand')!.split(",") : [];
  const gender = searchParams.get('gender') ? searchParams.get('gender')!.split(",") : [];
  const [selectedPrice, setSelectedPrice] = useState(price);
  const [selectedCategories, setSelectedCategories] = useState(category);
  const [selectedBrands, setSelectedBrands] = useState(brand);
  const [selectedGender, setSelectedGender] = useState(gender);

  const handleCheckbox = (
    item: string,
    criteria: string[],
    setCriteria: Dispatch<SetStateAction<string[]>>
  ) => {
    let criteriaArray;

    if (criteria.includes(item)) {
      criteriaArray = criteria.filter(category => category !== item);
    } else {
      criteriaArray = [...criteria, item]
    }
    setCriteria(criteriaArray);
  }

  const handleSetFilter = useDebouncedCallback(() => {
    const params = new URLSearchParams(searchParams);
    const criteriaArrays = [selectedCategories, selectedBrands, selectedGender]
    const filter = ["category", "brand", "gender"];

    for (let index = 0; index < criteriaArrays.length; index++) {
      const element = criteriaArrays[index];

      if (!element.length) {
        params.delete(filter[index]);
      } else {
        const categoryString = element.join(",");
        params.set(filter[index], `${categoryString}`);
      }
    }

    params.set('page', '1');

    if (selectedPrice[0] !== '0' || selectedPrice[1] !== '100000') {
      params.set('price', selectedPrice.join(","));
    } else {
      params.delete('price');
    }

    replace(`${pathname}?${params.toString()}`);
  }, 1000)

  const handleCategory = (item: string) => {
    handleCheckbox(item, selectedCategories, setSelectedCategories);
    handleSetFilter();
  }

  const handleBrand = (item: string) => {
    handleCheckbox(item, selectedBrands, setSelectedBrands);
    handleSetFilter();
  }

  const handleGender = (item: string) => {
    handleCheckbox(item, selectedGender, setSelectedGender);
    handleSetFilter();
  }

  const handlePrice = (price: string, index: 0 | 1) => {
    if (index === 0) setSelectedPrice(prev => [price, prev[1]])
    if (index === 1) setSelectedPrice(prev => [prev[0], price])
    handleSetFilter();
  }


  return (
    <>
      <div className="filter_categories">

        <div>
          <Search inputID="mainPage_search_input" />

          <ProductSort />

          <label htmlFor="price">
            <h3>Price</h3>
          </label>
          <div className="price_container">
            <Input type="number" id="price" placeholder="From..." min="0" value={selectedPrice[0]} onChange={(e) => handlePrice(e.target.value, 0)} />
            <Input type="number" id="price" placeholder="To..." min="0" value={selectedPrice[1]} onChange={(e) => handlePrice(e.target.value, 1)} />
          </div>
        </div>

        <div>
          <h3>Category</h3>
          {productCategories.map((item, index) =>
            <div key={index} className="filter_categories_checkboxContainer">
              <Input
                type="checkbox"
                id={`category_${item}`}
                checked={selectedCategories.includes(item)}
                onChange={() => handleCategory(item)}
              />
              <label htmlFor={`category_${item}`}>{item}</label>
            </div>)}
        </div>

        <div>
          <h3>Brand</h3>
          {productBrands.map((item, index) =>
            <div key={index} className="filter_brand_checkboxContainer">
              <Input
                type="checkbox"
                id={`brand_${item}`}
                checked={selectedBrands.includes(item)}
                onChange={() => handleBrand(item)}
              />
              <label htmlFor={`brand_${item}`}>{item}</label>
            </div>)}
        </div>

        <div>
          <h3>Gender</h3>
          {productGender.map((item, index) =>
            <div key={index} className="filter_gender_checkboxContainer">
              <Input
                type="checkbox"
                id={`gender_${item}`}
                checked={selectedGender.includes(item)}
                onChange={() => handleGender(item)}
              />
              <label htmlFor={`gender_${item}`}>{item}</label>
            </div>)}
        </div>

      </div>
    </>
  )
}

