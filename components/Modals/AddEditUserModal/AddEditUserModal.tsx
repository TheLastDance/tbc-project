import "./AddEditUserModal.css";
import { ModalPortal } from "../ModalPortal/ModalPortal";
import { AddEditUserForm } from "@/components/Forms/AddEditUserForm/AddEditUserForm";

interface IProps {
  setToggleFalse: () => void;
}

export function AddEditUserModal({ setToggleFalse }: IProps) {
  return (
    <ModalPortal onClose={setToggleFalse}>
      <section className="AddEditUserModal">
        <h3>Create new user:</h3>
        <AddEditUserForm setToggleFalse={setToggleFalse} />
      </section>
    </ModalPortal>
  )
}
