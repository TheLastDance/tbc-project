import Link from "next/link";
import { TranslateText } from "../TranslateText/TranslateText";

export function TermsLinksList() {
  return (
    <ul>
      <li>
        <Link href="/"><TranslateText translationKey="footer.terms" /></Link>
      </li>
      <li>
        <Link href="/"><TranslateText translationKey="footer.privacy" /></Link>
      </li>
    </ul>
  )
}
