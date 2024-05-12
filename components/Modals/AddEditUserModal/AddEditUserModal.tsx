import "./AddEditUserModal.css";
import { ModalPortal } from "../ModalPortal/ModalPortal";
import { AddEditUserForm } from "@/components/Forms/AddEditUserForm/AddEditUserForm";
import { TranslateText } from "@/components/TranslateText/TranslateText";

interface IProps {
  setToggleFalse: () => void;
  edit?: boolean;
  user?: IUser;
}

export function AddEditUserModal({ setToggleFalse, edit, user }: IProps) {
  return (
    <ModalPortal onClose={setToggleFalse}>
      <section className="AddEditUserModal">
        {!edit && (
          <>
            <h3><TranslateText translationKey="createNewUser" />:</h3>
            <AddEditUserForm setToggleFalse={setToggleFalse} />
          </>
        )
        }
        {edit && (
          <>
            <h3><TranslateText translationKey="editUser" />:</h3>
            <AddEditUserForm user={user} setToggleFalse={setToggleFalse} />
          </>
        )}
      </section>
    </ModalPortal>
  )
}