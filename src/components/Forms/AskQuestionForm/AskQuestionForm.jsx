import "./AskQuestionForm.css";
import { FormContainer } from "../FormContainer/FormContainer";
import { Input } from "../../Input/Input";

export function AskQuestionForm() {
  return (
    <FormContainer>
      <form className="askQuestionForm" onSubmit={(e) => e.preventDefault()}>
        <h3>Ask question here:</h3>
        <Input
          type="text"
          name="firstName"
          id="askQuestionForm_firstName"
          label="First Name:"
          required
        />

        <Input
          type="text"
          name="lastName"
          id="askQuestionForm_lastName"
          label="Last Name:"
          required
        />

        <Input
          type="email"
          name="email"
          id="askQuestionForm_email"
          label="Email:"
          required
        />

        <Input
          type="tel"
          name="tel"
          id="askQuestionForm_tel"
          label="Phone number:"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          placeholder="USA Format: xxx-xxx-xxxx"
          required
        />

        <Input
          name="question"
          id="askQuestionForm_question"
          label="Your question:"
          required
          textArea
          rows="5"
        />

        <button type="submit">Send</button>

      </form>
    </FormContainer>
  )
}
