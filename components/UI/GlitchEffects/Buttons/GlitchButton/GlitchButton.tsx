import "./GlitchButton.css";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  text?: string;
}

export function GlitchButton({ children, text, ...props }: IProps) {

  return (
    <button className="resetButtonStyles hero glitch layers" data-text={text} {...props} >
      {children}
      <span>
        {text}
      </span>
    </button>
  )
}
