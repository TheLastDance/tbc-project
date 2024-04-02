"use client"

import "./AskQuestionForm.css";
import { useState } from "react";
import { FormContainer } from "../FormContainer/FormContainer";
import { Input } from "@/components/Input/Input";
import { handleChangeInputObj } from "@/utils";

export function AskQuestionForm() {
  const [formStates, setFormStates] = useState({
    firstName: "",
    lastName: "",
    email: "",
    tel: "",
    question: "",
  })

  const handleOnChange = (e, key) => {
    handleChangeInputObj(setFormStates, e, key);
  }

  return (
    <FormContainer>
      <form className="askQuestionForm" onSubmit={(e) => e.preventDefault()}>
        <h3>Ask question here:</h3>
        <Input
          type="text"
          name="firstName"
          id="askQuestionForm_firstName"
          label="First Name:"
          value={formStates.firstName}
          onChange={(e) => handleOnChange(e, "firstName")}
          required
        />

        <Input
          type="text"
          name="lastName"
          id="askQuestionForm_lastName"
          label="Last Name:"
          value={formStates.lastName}
          onChange={(e) => handleOnChange(e, "lastName")}
          required
        />

        <Input
          type="email"
          name="email"
          id="askQuestionForm_email"
          label="Email:"
          value={formStates.email}
          onChange={(e) => handleOnChange(e, "email")}
          required
        />

        <Input
          type="tel"
          name="tel"
          id="askQuestionForm_tel"
          label="Phone number:"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          placeholder="USA Format: xxx-xxx-xxxx"
          value={formStates.tel}
          onChange={(e) => handleOnChange(e, "tel")}
          required
        />

        <Input
          name="question"
          id="askQuestionForm_question"
          label="Your question:"
          textArea
          rows="5"
          value={formStates.question}
          onChange={(e) => handleOnChange(e, "question")}
          required
        />

        <button type="submit">Send</button>

      </form>
    </FormContainer>
  )
}
