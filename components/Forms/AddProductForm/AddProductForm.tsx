"use client"
import "./AddProductForm.css"
import { Input } from "@/components/Input/Input"
import { FormContainer } from "../FormContainer/FormContainer"
// import { TranslateText } from "@/components/TranslateText/TranslateText"
import { PendingButton } from "@/components/Buttons/PendingButton/PendingButton"
import { addProduct } from "@/services/actions/products/add-product"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"

export function AddProductForm() {
  const { push } = useRouter();

  const handleAddProduct = async (data: FormData) => {
    const res = await addProduct(data);
    if (res?.error) toast.error(res.error, { duration: 5000 });
    if (res?.message) toast.success(res.message, { duration: 5000 });
    push("/admin/products");
  }

  return (
    <FormContainer>
      <form action={handleAddProduct}>

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

        <div className="input_container">
          <label htmlFor="addProductForm_brand">Brand:</label>
          <select
            id="addProductForm_brand"
            name="brand"
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
          defaultValue="1000.00"
          required
        />

        <Input
          type="file"
          name="images"
          id="profile_images"
          accept="image/*"
          title="file"
          required
          multiple
        />


        <PendingButton type="submit" mode="glitchHover" translationKey="button.save" />

      </form>

    </FormContainer>
  )
}
