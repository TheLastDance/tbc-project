
"use client"
import "./ProductFilters.css"
import { useSearchParams, usePathname, useRouter } from "next/navigation"
import { productBrands, productCategories, productGender } from "@/services/constants";
import { Input } from "@/components/Input/Input";
import { Checkbox } from "@/components/Checkbox/Checkbox";
import { useState, Dispatch, SetStateAction } from "react";
import { useDebouncedCallback } from "use-debounce";
import { ProductSort } from "./ProductSort";
import { Search } from "@/components/Search/Search";
import { TranslateText } from "@/components/TranslateText/TranslateText";
import { useToggle } from "@/services/hooks/useToggle";
import { Filters } from "@/components/Icons/Filters";

export function ProductFilters() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const { toggle, handleToggle } = useToggle();
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

    replace(`${pathname}?${params.toString()}`, { scroll: false });
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
      <button type="button" title="toggle filters" className="resetButtonStyles filterButton" onClick={handleToggle}>
        <Filters />
      </button>
      <div className={toggle ? "filter_categories filter_categories_toggled" : "filter_categories"}>

        <div>
          <Search inputID="mainPage_search_input" />

          <ProductSort />

          <label htmlFor="priceFrom">
            <h3><TranslateText translationKey="products.price" /></h3>
          </label>
          <div className="price_container">
            <Input type="number" id="priceFrom" placeholder="From..." min="0" value={selectedPrice[0]} onChange={(e) => handlePrice(e.target.value, 0)} />
            <Input type="number" id="priceTo" placeholder="To..." min="0" value={selectedPrice[1]} onChange={(e) => handlePrice(e.target.value, 1)} />
          </div>
        </div>

        <div>
          <h3><TranslateText translationKey="fullProduct.category" /></h3>
          <ul>
            {productCategories.map((item, index) => {
              const isChecked = selectedCategories.includes(item);

              return (
                <li
                  key={index}
                  className={isChecked ? "filter_categories_checkboxContainer checked" : "filter_categories_checkboxContainer"}
                >
                  <Checkbox
                    id={`category_${item}`}
                    checked={isChecked}
                    onChange={() => handleCategory(item)}
                    label={item}
                  />
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h3><TranslateText translationKey="fullProduct.brand" /></h3>
          <ul>
            {productBrands.map((item, index) => {
              const isChecked = selectedBrands.includes(item);

              return (
                <li
                  key={index}
                  className={isChecked ? "filter_brand_checkboxContainer checked" : "filter_brand_checkboxContainer"}
                >
                  <Checkbox
                    id={`brand_${item}`}
                    checked={isChecked}
                    onChange={() => handleBrand(item)}
                    label={item}
                  />
                </li>);
            })}
          </ul>
        </div>

        <div>
          <h3><TranslateText translationKey="fullProduct.gender" /></h3>
          <ul>
            {productGender.map((item, index) => {
              const isChecked = selectedGender.includes(item);

              return (
                <li
                  key={index}
                  className={isChecked ? "filter_gender_checkboxContainer checked" : "filter_gender_checkboxContainer"}
                >
                  <Checkbox
                    id={`gender_${item}`}
                    checked={isChecked}
                    onChange={() => handleGender(item)}
                    label={item}
                  />
                </li>);
            })}
          </ul>
        </div>

      </div>
    </>
  )
}

