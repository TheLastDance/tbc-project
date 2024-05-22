import "./Heading.css"
import { TranslationKey } from "@/translations/translations";
import { TranslateText } from "@/components/TranslateText/TranslateText";

interface IProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children?: React.ReactNode;
  translationKey?: TranslationKey;
}

export function Heading({ level, children, translationKey }: IProps) {
  const text = translationKey ? TranslateText({ translationKey }) : "";

  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag className="heading heading-layers heading-glitch-h" data-text={text || children}>
      {children}
      {text}
    </Tag>
  );

}
