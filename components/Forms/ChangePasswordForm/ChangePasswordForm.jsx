"use client"

import "./ChangePasswordForm.css"
import { useState } from "react"
import { FormContainer } from "../FormContainer/FormContainer"
import { Input } from "@/components/Input/Input"
import { handleChangeInputObj } from "@/services/utils";

export function ChangePasswordForm() {
  const [formStates, setFormStates] = useState({
    password: "",
    confirmPassword: "",
  })

  const handleOnChange = (e, key) => {
    handleChangeInputObj(setFormStates, e, key);
  }

  return (
    <FormContainer>
      <form className="changePasswordForm" onSubmit={(e) => e.preventDefault()}>
        <h3>Change Password:</h3>
        <Input
          type="password"
          id="profile_password"
          name="password"
          label="New Password: "
          value={formStates.password}
          onChange={(e) => handleOnChange(e, "password")}
          required
        />

        <Input
          type="password"
          id="profile_confirmPassword"
          name="confirmPassword"
          label="Confirm Password: "
          value={formStates.confirmPassword}
          onChange={(e) => handleOnChange(e, "confirmPassword")}
          required
        />

        <button type="submit">Save</button>
      </form>
    </FormContainer>
  )
}
