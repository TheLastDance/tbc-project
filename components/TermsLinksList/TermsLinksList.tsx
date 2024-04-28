import { LocaleLink } from "../Links/LocaleLink";
import { TranslateText } from "../TranslateText/TranslateText";

export function TermsLinksList() {
  return (
    <ul>
      <li>
        <LocaleLink href="/">
          <TranslateText translationKey="footer.terms" />
        </LocaleLink>
      </li>
      <li>
        <LocaleLink href="/">
          <TranslateText translationKey="footer.privacy" />
        </LocaleLink>
      </li>
    </ul>
  );
}
