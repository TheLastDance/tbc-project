import "./Checkbox.css"

export function Checkbox({
  label,
  id,
  name,
  required,
  textArea,
  onChange,
  ...props
}: IInputProps) {
  return (
    <div className="checkbox_wrapper">
      <input
        className="inp-cbx"
        id={id}
        type="checkbox"
        name={name}
        onChange={onChange}
        {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
      />
      <label className="cbx" htmlFor={id}>
        <span>
          <svg width="12px" height="10px" viewBox="0 0 12 10">
            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
          </svg>
        </span>
        <span>{label}</span>
      </label>
    </div>
  )
}
