import "./GlitchButton.css";
import { PendingButtonLoader } from "@/components/Loaders/PendingButtonLoader/PendingButtonLoader";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  text?: string;
  loading?: boolean;
}

export function GlitchButton({ children, text, loading, ...props }: IProps) {

  return (
    <button className="resetButtonStyles hero glitch layers" data-text={text} {...props} >
      {loading && <PendingButtonLoader />}
      {children}
      <span>
        {text}
      </span>
    </button>
  )
}
