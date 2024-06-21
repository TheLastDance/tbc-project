import "./GlitchHoverButton.css";
import { PendingButtonLoader } from "@/components/Loaders/PendingButtonLoader/PendingButtonLoader";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  text?: string;
  loading?: boolean;
}

export function GlitchHoverButton({ children, text, loading, ...props }: IProps) {
  const isText = typeof children === "string" ? children : "";
  return (
    <button className="resetButtonStyles hero-h glitch-h layers-h" data-text={text || isText || ""} {...props} >
      {loading && <PendingButtonLoader />}
      {children}
      <span>
        {text}
      </span>
    </button>
  )
}