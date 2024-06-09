import "./AddEditUserModal.css";
import { AddEditUserForm } from "@/components/Forms/AddEditUserForm/AddEditUserForm";
import { ModalUI } from "../ModalUI/ModalUI";

interface IProps {
  setToggleFalse: () => void;
  user: IUser;
}

export function AddEditUserModal({ setToggleFalse, user }: IProps) {
  return (
    <ModalUI setToggleFalse={setToggleFalse}>
      <AddEditUserForm user={user} setToggleFalse={setToggleFalse} />
    </ModalUI>
  )
}
