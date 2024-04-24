import { useFormStatus } from "react-dom";

export function PendingButton({ type, children }: ButtonProp): JSX.Element {
  const { pending } = useFormStatus();

  return (
    <button type={type} disabled={pending}>
      {children}
    </button>
  );
}
