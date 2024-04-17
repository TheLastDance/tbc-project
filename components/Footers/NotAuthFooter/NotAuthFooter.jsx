import "./NotAuthFooter.css";
import { TermsLinksList } from "@/components/TermsLinksList/TermsLinksList";
import { NewsletterForm } from "@/components/Forms/NewsletterForm/NewsletterForm";

export function NotAuthFooter() {
  return (
    <footer className="notAuthFooter">
      <TermsLinksList />
      <NewsletterForm />
    </footer>
  )
}
