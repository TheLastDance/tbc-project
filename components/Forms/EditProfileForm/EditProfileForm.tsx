"use client";

import "./EditProfileForm.css";
import { FormContainer } from "../FormContainer/FormContainer";
import { Input } from "@/components/Input/Input";
import { TranslateText } from "@/components/TranslateText/TranslateText";
import { PendingButton } from "@/components/Buttons/PendingButton/PendingButton";
import { editUser } from "@/services/actions";
import { SingleFileUpload } from "@/components/UploadInputs/SingleFileUpload/SingleFileUpload";
import toast from "react-hot-toast";

export function EditProfileForm({ user }: { user: IUser }) {
  const { given_name, family_name, birth_date, picture } = user;

  const handleEdit = async (data: FormData) => {
    const res = await editUser(data, picture);
    if (res?.error) toast.error(res.error, { duration: 5000 });
    if (res?.message) toast.success(res.message, { duration: 5000 });
  }

  return (
    <FormContainer>
      <form className="editProfileForm" action={handleEdit}>
        <h3>
          <TranslateText translationKey="form.editProfile" />
        </h3>
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

        <PendingButton loader type="submit" translationKey="button.save" mode="glitchHover" />
      </form>
    </FormContainer>
  );
}
