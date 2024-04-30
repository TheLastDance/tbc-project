import "./ArrowNavigation.css";
import { TranslateText } from "../TranslateText/TranslateText";
import { LocaleLink } from "../Links/LocaleLink";

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
      <LocaleLink href={hrefPrev}>
        ⬅
        <TranslateText translationKey="previous" />
      </LocaleLink>
      <LocaleLink href={hrefNext}>
        <TranslateText translationKey="next" />➡
      </LocaleLink>
    </nav>
  );
}
