"use client";

import "./AreYouSureModal.css"
import { ModalPortal } from "../ModalPortal/ModalPortal"
import { Button } from "@/components/UI/Buttons/Button/Button";
import { TranslateText } from "@/components/TranslateText/TranslateText";

interface IProps {
  setToggleFalse: () => void;
  children: React.ReactNode;
}

export function AreYouSureModal({ setToggleFalse, children }: IProps) {
  return (
    <ModalPortal onClose={setToggleFalse}>
      <div className="areYouSureModal_container">
        <h5>
          <TranslateText translationKey="areYouSure" />
        </h5>
        <div className="areYouSure_buttons">
          {children}
          <Button type="button" mode="glitchHover" translationKey="no" onClick={setToggleFalse} />
        </div>
      </div>
    </ModalPortal>
  )
}

