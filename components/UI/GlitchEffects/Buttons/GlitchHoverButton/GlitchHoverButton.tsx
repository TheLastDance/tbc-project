import "./GlitchHoverButton.css";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  text?: string;
}

export function GlitchHoverButton({ children, text, ...props }: IProps) {
  const isText = typeof children === "string" ? children : "";
  return (
    <button className="resetButtonStyles hero-h glitch-h layers-h" data-text={text || isText || ""} {...props} >
      {children}
      <span>
        {text}
      </span>
    </button>
  )
}