"use client"
import { useState, FormEvent } from "react";
import { FormContainer } from "../FormContainer/FormContainer"
import { Input } from "@/components/Input/Input"
import { editUser } from "@/services/actions";
import { TranslateText } from "@/components/TranslateText/TranslateText";
import { Button } from "@/components/UI/Buttons/Button/Button";

interface IProps {
  setToggleFalse: () => void;
  user: IUser;
}

export function AddEditUserForm({ setToggleFalse, user }: IProps) {
  const [loading, setLoading] = useState(false);

  const handleCreateUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData(e.currentTarget);
    await editUser(data, user.id);

    setLoading(false);
    setToggleFalse();
  }

  return <FormContainer>
    <form className="AddEditUserForm" onSubmit={(e) => handleCreateUser(e)}>
      <Input
        label={<TranslateText translationKey="form.label.firstName" />}
        name="given_name"
        id="admin_form_given_name"
        type="text"
        defaultValue={user ? user.given_name : ""}
        required
      />

      <Input
        label={<TranslateText translationKey="form.label.lastName" />}
        name="family_name"
        id="admin_form_family_name"
        type="text"
        defaultValue={user ? user.family_name : ""}
        required
      />

      <Input
        label={<TranslateText translationKey="birthDate" />}
        name="birth_date"
        id="admin_form_birthDate"
        type="date"
        defaultValue={user ? user.birth_date : ""}
        required
      />

      <Button
        type="submit"
        disabled={loading}
        translationKey={user ? "edit" : "addUser"}
        mode="glitchHover"
      />
    </form>
  </FormContainer>
}
