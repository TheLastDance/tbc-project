"use client"

import { useFormStatus } from "react-dom";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
};

export function PendingButton({
  type,
  children
}: IProps) {
  const { pending } = useFormStatus();

  return (
    <button type={type} disabled={pending}>
      {children}
    </button>
  );
}
