import "./MainFooter.css";
import { TermsLinksList } from "@/components/TermsLinksList/TermsLinksList";

export function MainFooter() {
  return (
    <footer className='authFooter'>
      <div className="footer_links">
        <TermsLinksList />
      </div>
    </footer>
  )
}
