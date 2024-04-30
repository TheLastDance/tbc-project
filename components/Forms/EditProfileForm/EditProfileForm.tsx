"use client";

import "./EditProfileForm.css";
import { useState } from "react";
import { FormContainer } from "../FormContainer/FormContainer";
import { Input } from "@/components/Input/Input";
import { handleChangeInputObj } from "@/services/utils";
import { TranslateText } from "@/components/TranslateText/TranslateText";

export function EditProfileForm() {
  const [formStates, setFormStates] = useState<IEditProfileState>({
    firstName: "Michael",
    lastName: "Brown",
    email: "MichaelBrown@gmail.com",
  });

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: string
  ) => {
    handleChangeInputObj(setFormStates, e, key);
  };

  return (
    <FormContainer>
      <form className="editProfileForm" onSubmit={(e) => e.preventDefault()}>
        <h3>
          <TranslateText translationKey="form.editProfile" />
        </h3>
        <Input
          type="text"
          id="profile_firstName"
          name="firstName"
          label={<TranslateText translationKey="form.label.firstName" />}
          value={formStates.firstName}
          onChange={(e) => handleOnChange(e, "firstName")}
          required
        />

        <Input
          type="text"
          id="profile_lastName"
          name="lastName"
          label={<TranslateText translationKey="form.label.lastName" />}
          value={formStates.lastName}
          onChange={(e) => handleOnChange(e, "lastName")}
          required
        />

        <Input
          type="email"
          name="email"
          id="profile_email"
          label={<TranslateText translationKey="form.label.email" />}
          value={formStates.email}
          onChange={(e) => handleOnChange(e, "email")}
          required
        />

        <button type="submit">
          <TranslateText translationKey="button.save" />
        </button>
      </form>
    </FormContainer>
  );
}
