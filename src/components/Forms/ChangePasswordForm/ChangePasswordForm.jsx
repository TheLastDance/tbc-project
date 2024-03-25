import "./ChangePasswordForm.css"
import { FormContainer } from "../FormContainer/FormContainer"
import { Input } from "../../Input/Input"

export function ChangePasswordForm() {
  return (
    <FormContainer>
      <form className="changePasswordForm" onSubmit={(e) => e.preventDefault()}>
        <h3>Change Password:</h3>
        <Input
          type="password"
          id="profile_password"
          name="password"
          label="New Password: "
          required
        />

        <Input
          type="password"
          id="profile_confirmPassword"
          name="confirmPassword"
          label="Confirm Password: "
          required
        />

        <button type="submit">Save</button>
      </form>
    </FormContainer>
  )
}
