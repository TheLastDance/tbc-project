import "./Input.css"

export function Input({
  label,
  id,
  type,
  name,
  placeholder,
  required,
  textArea,
  ...props
}) {
  return (
    <div className="input_container">
      <label htmlFor={id}>{label}</label>
      {textArea ? (
        <textarea
          id={id}
          name={name}
          placeholder={placeholder}
          required={required}
          {...props}
        />
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          required={required}
          {...props}
        />
      )}
    </div>
  )
}
