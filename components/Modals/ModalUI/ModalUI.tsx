"use client"
import "./ModalUI.css"
import { ModalPortal } from "../ModalPortal/ModalPortal";

interface IProps {
  setToggleFalse: () => void;
  children: React.ReactNode;
}

export function ModalUI({ setToggleFalse, children }: IProps) {
  return (
    <ModalPortal onClose={setToggleFalse}>
      <section className="ModalUI">
        {children}
      </section>
    </ModalPortal>
  )
}
