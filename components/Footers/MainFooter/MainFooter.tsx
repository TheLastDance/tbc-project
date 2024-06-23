import "./MainFooter.css";
import { TermsLinksList } from "@/components/TermsLinksList/TermsLinksList";
import { SocialFacebook } from "@/components/Icons/SocialFacebook";
import { SocialInstagram } from "@/components/Icons/SocialInstagram";
import { SocialYouTube } from "@/components/Icons/SocialYouTube";
import Link from "next/link";

export function MainFooter() {
  return (
    <footer className='authFooter'>
      <div className="footer_links">
        <TermsLinksList />
      </div>
      <div className="footer_social">
        <Link href="/" title="facebook" >
          <SocialFacebook />
        </Link>

        <Link href="/" title="instagram" >
          <SocialInstagram />
        </Link>

        <Link href="/" title="youtube" >
          <SocialYouTube />
        </Link>
      </div>
    </footer>
  )
}
