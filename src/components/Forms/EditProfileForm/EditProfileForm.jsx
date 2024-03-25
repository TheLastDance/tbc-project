import "./EditProfileForm.css"
import { FormContainer } from "../FormContainer/FormContainer"
import { Input } from "../../Input/Input"

export function EditProfileForm() {
  return (
    <FormContainer>
      <form className="editProfileForm" onSubmit={(e) => e.preventDefault()}>
        <h3>Edit profile:</h3>
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

        <button type="submit">Save</button>
      </form>
    </FormContainer>
  )
}
