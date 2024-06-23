"use client"

import "./EditProductForm.css"
import { FormContainer } from "../FormContainer/FormContainer"
import { Input } from "@/components/Input/Input"
import { Button } from "@/components/UI/Buttons/Button/Button"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { AddProductUpload } from "@/components/UploadInputs/AddProductUpload/AddProductUpload"
import { editProduct } from "@/services/actions/products/edit-product"
import toast from "react-hot-toast"
import { productGender, productBrands, productCategories } from "@/services/constants"
import { TranslateText } from "@/components/TranslateText/TranslateText"

export function EditProductForm({ product }: { product: IProductItem }) {
  const { images, id } = product;
  const { push } = useRouter();
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState<(File | string)[]>(images);

  const handleEditProduct = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData(e.currentTarget);

    for (const file of files) {
      typeof file === "object" ? data.append("images", file) : data.append("blobImg", file);
    }

    const res = await editProduct(data, images, id);

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
      <form onSubmit={handleEditProduct} className="editProductForm">

        <Input
          type="text"
          name="title"
          id="addProductForm_title"
          label={<TranslateText translationKey="form.label.firstName" />}
          maxLength={30}
          defaultValue={product.title}
          required
        />

        <Input
          type="text"
          name="description"
          id="addProductForm_description"
          label={<TranslateText translationKey="fullProduct.description" />}
          minLength={100}
          defaultValue={product.description}
          textArea
          required
        />

        <div className="input_container select-style-input">
          <label htmlFor="addProductForm_brand">
            <TranslateText translationKey="fullProduct.brand" />:
          </label>
          <select
            id="addProductForm_brand"
            name="brand"
            defaultValue={product.brand}
            required
          >
            {productBrands.map((item, index) => <option key={index} value={item}>{item}</option>)}
          </select>
        </div>

        <div className="input_container select-style-input">
          <label htmlFor="addProductForm_category">
            <TranslateText translationKey="fullProduct.category" />:
          </label>
          <select
            id="addProductForm_category"
            name="category"
            defaultValue={product.category}
            required
          >
            {productCategories.map((item, index) => <option key={index} value={item}>{item}</option>)}
          </select>
        </div>

        <div className="input_container select-style-input">
          <label htmlFor="addProductForm_gender">
            <TranslateText translationKey="fullProduct.gender" />:
          </label>
          <select
            id="addProductForm_gender"
            name="gender"
            defaultValue={product.gender}
            required
          >
            {productGender.map((item, index) => <option key={index} value={item}>{item}</option>)}
          </select>
        </div>

        <Input
          type="number"
          name="price"
          id="addProductForm_price"
          label={<TranslateText translationKey="products.price" />}
          step="any"
          min="100"
          defaultValue={`${product.price}`}
          required
        />

        <AddProductUpload setFiles={setFiles} settedPhotos={images} />

        <Button loading={loading} type="submit" mode="glitchHover" translationKey="button.save" disabled={loading} />

      </form>

    </FormContainer>
  )
}
