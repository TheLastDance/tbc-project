import "./ProfileForm.css"
import { FormContainer } from "../FormContainer/FormContainer"
import { Input } from "../../Input/Input"

export function ProfileForm() {
  return (
    <FormContainer>
      <form className="profileForm" onSubmit={(e) => e.preventDefault()}>
        <Input
          type="text"
          id="profile_firstName"
          name="firstName"
          defaultValue="Michael"
          label="First Name:"
          required
        />

        <Input
          type="text"
          id="profile_lastName"
          name="lastName"
          defaultValue="Brown"
          label="Last Name:"
          required
        />

        <Input
          type="email"
          name="email"
          id="profile_email"
          defaultValue="MichaelBrown@gmail.com"
          label="Email:"
          required
        />

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
