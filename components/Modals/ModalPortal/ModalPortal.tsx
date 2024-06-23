"use client"
import "./ModalPortal.css"
import { createPortal } from "react-dom";
import { useState, useEffect } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { MotionDiv } from "@/components/MotionDiv/MotionDiv";
import { modalAnimation } from "@/services/animations";
import FocusLock from 'react-focus-lock';

interface IProps {
  children: React.ReactNode,
  onClose: () => void;
}

export function ModalPortal({ children, onClose }: IProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  return isMounted ? createPortal(
    <>
      <MotionDiv
        initial="initial"
        animate="animate"
        exit="exit"
        variants={modalAnimation}
        onKeyDown={(e) => e.key === "Escape" && onClose()}
      >
        <div className="modal_overlay"></div>
        <FocusLock returnFocus>
          <OutsideClickHandler onOutsideClick={onClose} >
            {children}
          </OutsideClickHandler>
        </FocusLock>
      </MotionDiv>
    </>, document.querySelector("#modal_container")!) : null
}
