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
      <form onSubmit={handleEditProduct}>

        <Input
          type="text"
          name="title"
          id="addProductForm_title"
          label={"Title"}
          maxLength={30}
          defaultValue={product.title}
          required
        />

        <Input
          type="text"
          name="description"
          id="addProductForm_description"
          label={"Description"}
          minLength={100}
          defaultValue={product.description}
          textArea
          required
        />

        <div className="input_container">
          <label htmlFor="addProductForm_brand">Brand:</label>
          <select
            id="addProductForm_brand"
            name="brand"
            defaultValue={product.brand}
            required
          >
            <option value="SynTech Industries">SynTech Industries</option>
            <option value="CyberSphere">CyberSphere</option>
            <option value="EvoTech Robotics">EvoTech Robotics</option>
            <option value="FutureWave Systems">FutureWave Systems</option>
          </select>
        </div>

        <div className="input_container">
          <label htmlFor="addProductForm_category">Category:</label>
          <select
            id="addProductForm_category"
            name="category"
            defaultValue={product.category}
            required
          >
            <option value="Household Assistants">Household Assistants</option>
            <option value="Security & Defense">Security & Defense</option>
            <option value="Childcare & Education">Childcare & Education</option>
            <option value="Customer Service">Customer Service</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Sport">Sport</option>
          </select>
        </div>

        <div className="input_container">
          <label htmlFor="addProductForm_gender">Gender:</label>
          <select
            id="addProductForm_gender"
            name="gender"
            defaultValue={product.gender}
            required
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <Input
          type="number"
          name="price"
          id="addProductForm_price"
          label={"Price"}
          step="any"
          min="100"
          defaultValue={`${product.price}`}
          required
        />

        <AddProductUpload setFiles={setFiles} settedPhotos={images} />

        <Button type="submit" mode="glitchHover" translationKey="button.save" disabled={loading} />

      </form>

    </FormContainer>
  )
}
