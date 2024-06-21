"use client"

import { useFormStatus } from "react-dom";
import { Button } from "@/components/UI/Buttons/Button/Button";
import { TranslationKey } from "@/translations/translations";
import { PendingButtonLoader } from "@/components/Loaders/PendingButtonLoader/PendingButtonLoader";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  mode?: ButtonMode;
  translationKey?: TranslationKey;
  loader?: boolean;
};

export function PendingButton({
  type,
  mode,
  translationKey,
  children,
  loader,
  ...props
}: IProps) {
  const { pending } = useFormStatus();

  return (
    <Button type={type} disabled={pending} mode={mode} translationKey={translationKey} {...props}>
      {pending && loader && <PendingButtonLoader />}
      {children}
    </Button>
  );
}
