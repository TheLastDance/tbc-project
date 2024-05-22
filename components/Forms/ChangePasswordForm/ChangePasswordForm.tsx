"use client";

import "./ChangePasswordForm.css";
import { useState } from "react";
import { FormContainer } from "../FormContainer/FormContainer";
import { Input } from "@/components/Input/Input";
import { handleChangeInputObj } from "@/services/utils";
import { TranslateText } from "@/components/TranslateText/TranslateText";
import { Button } from "@/components/UI/Buttons/Button/Button";

export function ChangePasswordForm() {
  const [formStates, setFormStates] = useState<IChangePasswordState>({
    password: "",
    confirmPassword: "",
  });

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: string
  ) => {
    handleChangeInputObj(setFormStates, e, key);
  };

  return (
    <FormContainer>
      <form className="changePasswordForm" onSubmit={(e) => e.preventDefault()}>
        <h3>
          <TranslateText translationKey="form.changePassword" />
        </h3>
        <Input
          type="password"
          id="profile_password"
          name="password"
          label={<TranslateText translationKey="form.label.newPassword" />}
          value={formStates.password}
          onChange={(e) => handleOnChange(e, "password")}
          required
        />

        <Input
          type="password"
          id="profile_confirmPassword"
          name="confirmPassword"
          label={<TranslateText translationKey="form.label.confirmPassword" />}
          value={formStates.confirmPassword}
          onChange={(e) => handleOnChange(e, "confirmPassword")}
          required
        />

        <Button type="submit" translationKey="button.save" mode="glitchHover" />
      </form>
    </FormContainer>
  );
}
