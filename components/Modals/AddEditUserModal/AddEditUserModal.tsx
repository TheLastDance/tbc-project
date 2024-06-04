import "./AddEditUserModal.css";
import { AddEditUserForm } from "@/components/Forms/AddEditUserForm/AddEditUserForm";
import { TranslateText } from "@/components/TranslateText/TranslateText";
import { ModalUI } from "../ModalUI/ModalUI";

interface IProps {
  setToggleFalse: () => void;
  user: IUser;
}

export function AddEditUserModal({ setToggleFalse, user }: IProps) {
  return (
    <ModalUI setToggleFalse={setToggleFalse}>
      <h3><TranslateText translationKey="editUser" />:</h3>
      <AddEditUserForm user={user} setToggleFalse={setToggleFalse} />
    </ModalUI>
  )
}
