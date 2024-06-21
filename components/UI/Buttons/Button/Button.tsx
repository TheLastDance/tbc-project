import "./Button.css";
import { GlitchButton } from "../../GlitchEffects/Buttons/GlitchButton/GlitchButton";
import { GlitchHoverButton } from "../../GlitchEffects/Buttons/GlitchHoverButton/GlitchHoverButton";
import { TranslationKey } from "@/translations/translations";
import { TranslateText } from "@/components/TranslateText/TranslateText";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  translationKey?: TranslationKey;
  mode?: ButtonMode;
  loading?: boolean;
}

export function Button({ children, translationKey, mode, loading, ...props }: IProps) {
  const text = translationKey ? TranslateText({ translationKey }) : "";

  if (mode === "glitch") return <GlitchButton text={text} loading={loading} {...props}>{children}</GlitchButton>;

  if (mode === "glitchHover") return <GlitchHoverButton text={text} loading={loading} {...props}>{children}</GlitchHoverButton>

  return (
    <>
      <button {...props}>{children}{text}</button>
    </>
  )
}
