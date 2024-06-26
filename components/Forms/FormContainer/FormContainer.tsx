import "./FormContainer.css";

// adds default styles for form if we need to
export function FormContainer({ children }: ChildrenProps) {
  return <div className="form_container">{children}</div>;
}
