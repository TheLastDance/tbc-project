import "./Input.css"

export function Input({
  label,
  id,
  type,
  name,
  placeholder,
  required,
}) {
  return (
    <div className="input_container">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        required={required}
      />
    </div>
  )
}
