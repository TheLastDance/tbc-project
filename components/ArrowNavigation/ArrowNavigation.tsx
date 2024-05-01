import "./ArrowNavigation.css";
import { TranslateTextServer } from "../TranslateText/TranslateTextServer";
import Link from "next/link";

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
        <TranslateTextServer translationKey="previous" />
      </Link>
      <Link href={hrefNext}>
        <TranslateTextServer translationKey="next" />➡
      </Link>
    </nav>
  );
}
