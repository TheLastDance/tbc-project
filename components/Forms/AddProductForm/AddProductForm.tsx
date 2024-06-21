"use client"
import "./AddProductForm.css"
import { Input } from "@/components/Input/Input"
import { FormContainer } from "../FormContainer/FormContainer"
// import { TranslateText } from "@/components/TranslateText/TranslateText"
import { Button } from "@/components/UI/Buttons/Button/Button"
import { addProduct } from "@/services/actions/products/add-product"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { AddProductUpload } from "@/components/UploadInputs/AddProductUpload/AddProductUpload"
import { productGender, productBrands, productCategories } from "@/services/constants"

export function AddProductForm() {
  const { push } = useRouter();
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState<(File | string)[]>([]);

  const handleAddProduct = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData(e.currentTarget);

    for (const file of files) {
      data.append("images", file)
    }

    const res = await addProduct(data);

    if (res?.error) {
      toast.error(res.error, { duration: 5000 });
    } else {
      toast.success(res.message!, { duration: 5000 });
      push("/admin/products");
    }
    setLoading(false);
  }

  return (
    <FormContainer>
      <form onSubmit={handleAddProduct} className="addProductForm">

        <Input
          type="text"
          name="title"
          id="addProductForm_title"
          label={"Title"}
          maxLength={30}
          required
        />

        <Input
          type="text"
          name="description"
          id="addProductForm_description"
          label={"Description"}
          minLength={100}
          textArea
          required
        />

        <div className="input_container select-style-input">
          <label htmlFor="addProductForm_brand">Brand:</label>
          <select
            id="addProductForm_brand"
            name="brand"
            required
          >
            {productBrands.map((item, index) => <option key={index} value={item}>{item}</option>)}
          </select>
        </div>

        <div className="input_container select-style-input">
          <label htmlFor="addProductForm_category">Category:</label>
          <select
            id="addProductForm_category"
            name="category"
            required
          >
            {productCategories.map((item, index) => <option key={index} value={item}>{item}</option>)}
          </select>
        </div>

        <div className="input_container select-style-input">
          <label htmlFor="addProductForm_gender">Gender:</label>
          <select
            id="addProductForm_gender"
            name="gender"
            required
          >
            {productGender.map((item, index) => <option key={index} value={item}>{item}</option>)}
          </select>
        </div>

        <Input
          type="number"
          name="price"
          id="addProductForm_price"
          label={"Price"}
          step="any"
          min="100"
          defaultValue="1000.00"
          required
        />

        <AddProductUpload setFiles={setFiles} />

        <Button loading={loading} type="submit" mode="glitchHover" translationKey="button.save" disabled={loading} />

      </form>

    </FormContainer>
  )
}
