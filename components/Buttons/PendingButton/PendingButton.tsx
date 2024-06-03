"use client"

import { useFormStatus } from "react-dom";
import { Button } from "@/components/UI/Buttons/Button/Button";
import { TranslationKey } from "@/translations/translations";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  mode?: ButtonMode;
  translationKey?: TranslationKey;
};

export function PendingButton({
  type,
  mode,
  translationKey,
  children,
  ...props
}: IProps) {
  const { pending } = useFormStatus();

  return (
    <Button type={type} disabled={pending} mode={mode} translationKey={translationKey} {...props}>
      {children}
    </Button>
  );
}
