"use client"
import { useState, FormEvent } from "react";
import { FormContainer } from "../FormContainer/FormContainer"
import { Input } from "@/components/Input/Input"
import { createUser } from "@/services/actions";

interface IProps {
  setToggleFalse: () => void;
}

export function AddEditUserForm({ setToggleFalse }: IProps) {
  const [loading, setLoading] = useState(false);

  const handleCreateUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData(e.currentTarget);
    await createUser(data);

    setLoading(false);
    setToggleFalse();
  }

  return <FormContainer>
    <form className="AddEditUserForm" onSubmit={(e) => handleCreateUser(e)}>
      <Input
        label="Name:"
        name="name"
        id="admin_form_name"
        type="text"
        required
      />

      <Input
        label="Email:"
        name="email"
        id="admin_form_email"
        type="email"
        required
      />

      <Input
        label="Date of birth:"
        name="birthDate"
        id="admin_form_birthDate"
        type="date"
        required
      />

      <button type="submit" disabled={loading}>Add user</button>
    </form>
  </FormContainer>
}
