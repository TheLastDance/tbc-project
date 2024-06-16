import "./Input.css";

export function Input({
  label,
  id,
  type,
  name,
  placeholder,
  required,
  textArea,
  onChange,
  ...props
}: IInputProps) {
  return (
    <div className={type !== "checkbox" ? "input_container webflow-style-input" : "input_container"}>
      {label && <label htmlFor={id}>{label}:</label>}
      {textArea ? (
        <>
          <textarea
            id={id}
            name={name}
            placeholder={placeholder}
            required={required}
            onChange={onChange}
            {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        </>
      ) : (
        <>
          <input
            type={type}
            id={id}
            name={name}
            placeholder={placeholder}
            required={required}
            onChange={onChange}
            {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
          />
        </>
      )}
    </div>
  );
}
