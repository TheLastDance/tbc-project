"use client"

import React, { useState } from "react";
import "./AskQuestionForm.css";
import { FormContainer } from "../FormContainer/FormContainer";
import { Input } from "@/components/Input/Input";
import { handleChangeInputObj } from "@/services/utils";
import { TranslateText } from "@/components/TranslateText/TranslateText";

export function AskQuestionForm() {
  const [formStates, setFormStates] = useState<IAskQuestionState>({
    firstName: "",
    lastName: "",
    email: "",
    tel: "",
    question: "",
  });

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: string
  ) => {
    handleChangeInputObj(setFormStates, e, key);
  };

  return (
    <FormContainer>
      <form className="askQuestionForm" onSubmit={(e) => e.preventDefault()}>
        <h3>
          <TranslateText translationKey="form.askQuestionForm" />
        </h3>
        <Input
          type="text"
          name="firstName"
          id="askQuestionForm_firstName"
          label={<TranslateText translationKey="form.label.firstName" />}
          value={formStates.firstName}
          onChange={(e) => handleOnChange(e, "firstName")}
          required
        />

        <Input
          type="text"
          name="lastName"
          id="askQuestionForm_lastName"
          label={<TranslateText translationKey="form.label.lastName" />}
          value={formStates.lastName}
          onChange={(e) => handleOnChange(e, "lastName")}
          required
        />

        <Input
          type="email"
          name="email"
          id="askQuestionForm_email"
          label={<TranslateText translationKey="form.label.email" />}
          value={formStates.email}
          onChange={(e) => handleOnChange(e, "email")}
          required
        />

        <Input
          type="tel"
          name="tel"
          id="askQuestionForm_tel"
          label={<TranslateText translationKey="form.label.phoneNumber" />}
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          placeholder="xxx-xxx-xxxx"
          value={formStates.tel}
          onChange={(e) => handleOnChange(e, "tel")}
          required
        />

        <Input
          name="question"
          id="askQuestionForm_question"
          label={<TranslateText translationKey="form.label.yourQuestion" />}
          textArea
          rows={5}
          value={formStates.question}
          onChange={(e) => handleOnChange(e, "question")}
          required
        />

        <button type="submit">
          <TranslateText translationKey="button.send" />
        </button>
      </form>
    </FormContainer>
  );
}
