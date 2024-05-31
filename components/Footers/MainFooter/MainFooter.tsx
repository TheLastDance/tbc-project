import "./MainFooter.css";
import { TermsLinksList } from "@/components/TermsLinksList/TermsLinksList";
import { NewsletterForm } from "../../Forms/NewsletterForm/NewsletterForm";

export function MainFooter() {
  return (
    <footer className='authFooter'>
      <div className="footer_links">
        <TermsLinksList />
      </div>

      <NewsletterForm />
    </footer>
  )
}
