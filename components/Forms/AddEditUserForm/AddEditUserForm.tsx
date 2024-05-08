"use client"
import { useState, FormEvent } from "react";
import { FormContainer } from "../FormContainer/FormContainer"
import { Input } from "@/components/Input/Input"
import { createUser, editUser } from "@/services/actions";
import { TranslateText } from "@/components/TranslateText/TranslateText";

interface IProps {
  setToggleFalse: () => void;
  user?: IUser;
}

export function AddEditUserForm({ setToggleFalse, user }: IProps) {
  const [loading, setLoading] = useState(false);

  const handleCreateUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData(e.currentTarget);
    if (!user) await createUser(data);
    if (user) await editUser(data, user.id);

    setLoading(false);
    setToggleFalse();
  }

  return <FormContainer>
    <form className="AddEditUserForm" onSubmit={(e) => handleCreateUser(e)}>
      <Input
        label={<TranslateText translationKey="form.label.name" />}
        name="name"
        id="admin_form_name"
        type="text"
        defaultValue={user ? user.name : ""}
        required
      />

      <Input
        label={<TranslateText translationKey="form.label.email" />}
        name="email"
        id="admin_form_email"
        type="email"
        defaultValue={user ? user.email : ""}
        required
      />

      <Input
        label={<TranslateText translationKey="birthDate" />}
        name="birthDate"
        id="admin_form_birthDate"
        type="date"
        defaultValue={user ? user.birthDate : ""}
        required
      />

      <button type="submit" disabled={loading}>
        {user ?
          <TranslateText translationKey="edit" /> :
          <TranslateText translationKey="addUser" />
        }
      </button>
    </form>
  </FormContainer>
}
