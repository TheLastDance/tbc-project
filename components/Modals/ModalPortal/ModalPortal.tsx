"use client"
import "./ModalPortal.css"
import { createPortal } from "react-dom";
import { useState, useEffect } from "react";
import OutsideClickHandler from "react-outside-click-handler";

interface IProps {
  children: React.ReactNode,
  onClose: () => void;
}

export function ModalPortal({ children, onClose }: IProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  return isMounted ? createPortal(
    <>
      <div className="modal_overlay"></div>
      <OutsideClickHandler onOutsideClick={onClose}>
        <>{children}</>
      </OutsideClickHandler>
    </>, document.querySelector("#modal_container")!) : null
}
