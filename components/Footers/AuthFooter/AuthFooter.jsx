import "./AuthFooter.css";
import { Navigation } from "../../Navigation/Navigation";
import { TermsLinksList } from "@/components/TermsLinksList/TermsLinksList";
import { NewsletterForm } from "../../Forms/NewsletterForm/NewsletterForm";

export function AuthFooter() {
  return (
    <footer className='authFooter'>

      <div className="footer_links">
        <Navigation />

        <TermsLinksList />
      </div>

      <NewsletterForm />
    </footer>
  )
}
