"use client"

import "./EditProfileForm.css"
import { useState } from "react"
import { FormContainer } from "../FormContainer/FormContainer"
import { Input } from "@/components/Input/Input"
import { handleChangeInputObj } from "@/services/utils";

export function EditProfileForm() {
  const [formStates, setFormStates] = useState({
    firstName: "Michael",
    lastName: "Brown",
    email: "MichaelBrown@gmail.com",
  })

  const handleOnChange = (e, key) => {
    handleChangeInputObj(setFormStates, e, key);
  }

  return (
    <FormContainer>
      <form className="editProfileForm" onSubmit={(e) => e.preventDefault()}>
        <h3>Edit profile:</h3>
        <Input
          type="text"
          id="profile_firstName"
          name="firstName"
          label="First Name:"
          value={formStates.firstName}
          onChange={(e) => handleOnChange(e, "firstName")}
          required
        />

        <Input
          type="text"
          id="profile_lastName"
          name="lastName"
          label="Last Name:"
          value={formStates.lastName}
          onChange={(e) => handleOnChange(e, "lastName")}
          required
        />

        <Input
          type="email"
          name="email"
          id="profile_email"
          label="Email:"
          value={formStates.email}
          onChange={(e) => handleOnChange(e, "email")}
          required
        />

        <button type="submit">Save</button>
      </form>
    </FormContainer>
  )
}
