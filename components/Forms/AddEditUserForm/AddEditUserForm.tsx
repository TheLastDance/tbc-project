"use client"
import { useState, FormEvent } from "react";
import { FormContainer } from "../FormContainer/FormContainer"
import { Input } from "@/components/Input/Input"
import { editUser } from "@/services/actions";
import { TranslateText } from "@/components/TranslateText/TranslateText";
import { Button } from "@/components/UI/Buttons/Button/Button";
import { SingleFileUpload } from "@/components/UploadInputs/SingleFileUpload/SingleFileUpload";
import toast from "react-hot-toast";

interface IProps {
  setToggleFalse: () => void;
  user: IUser;
}

export function AddEditUserForm({ setToggleFalse, user }: IProps) {
  const [loading, setLoading] = useState(false);
  const { given_name, family_name, birth_date, picture, id } = user;

  const handleCreateUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData(e.currentTarget);
    const res = await editUser(data, picture, id);
    if (res?.error) toast.error(res.error, { duration: 5000 });
    if (res?.message) toast.success(res.message, { duration: 5000 });

    setLoading(false);
    setToggleFalse();
  }

  return <FormContainer>
    <form className="AddEditUserForm" onSubmit={(e) => handleCreateUser(e)}>
      <Input
        type="text"
        id="profile_firstName"
        name="given_name"
        label={<TranslateText translationKey="form.label.firstName" />}
        defaultValue={given_name}
        required
      />

      <Input
        type="text"
        id="profile_lastName"
        name="family_name"
        label={<TranslateText translationKey="form.label.lastName" />}
        defaultValue={family_name}
        required
      />

      <Input
        type="date"
        id="profile_birthDate"
        name="birth_date"
        label={<TranslateText translationKey="birthDate" />}
        defaultValue={birth_date}
      />

      <SingleFileUpload />

      <Button disabled={loading} type="submit" translationKey="button.save" mode="glitchHover" />
    </form>
  </FormContainer>
}
