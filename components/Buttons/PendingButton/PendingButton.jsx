import { useFormStatus } from "react-dom";

export function PendingButton({
  type,
  children
}) {
  const { pending } = useFormStatus();

  return <button type={type} disabled={pending}>{children}</button>
}