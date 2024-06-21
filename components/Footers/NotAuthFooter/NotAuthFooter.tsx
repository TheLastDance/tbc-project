import "./NotAuthFooter.css";
import { TermsLinksList } from "@/components/TermsLinksList/TermsLinksList";

export function NotAuthFooter() {
  return (
    <footer className="notAuthFooter">
      <TermsLinksList />
    </footer>
  )
}
