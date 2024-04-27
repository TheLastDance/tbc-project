import "./ArrowNavigation.css";
import Link from "next/link";
import { TranslateText } from "../TranslateText/TranslateText";

interface IProps {
  hrefPrev: string;
  hrefNext: string;
};

export function ArrowNavigation({
  hrefPrev,
  hrefNext
}: IProps) {
  return (
    <nav className="arrow_navigation">
      <Link href={hrefPrev}>
        ⬅
        <TranslateText translationKey="previous" />
      </Link>
      <Link href={hrefNext}>
        <TranslateText translationKey="next" />➡
      </Link>
    </nav>
  );
}
