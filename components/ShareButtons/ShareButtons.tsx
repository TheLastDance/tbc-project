"use client"
import "./ShareButtons.css"
import { SocialFacebook } from "../Icons/SocialFacebook"
import { SocialLinkedin } from "../Icons/SocialLinkedin"
import { SocialReddit } from "../Icons/SocialReddit"
import { SocialTwitter } from "../Icons/SocialTwitter"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BASE_URL } from "@/services/constants"


export function ShareButtons({ title = "" }: { title?: string, description?: string }) {
  const pathname = usePathname();
  const url = BASE_URL;

  return (
    <div className="social_icons">
      <Link target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=${url}${pathname}`}>
        <SocialFacebook />
      </Link>
      <Link target="_blank" href={`https://twitter.com/intent/tweet?url=${url}${pathname}&text=${title}`}>
        <SocialTwitter />
      </Link>
      <Link target="_blank" href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}${pathname}`}>
        <SocialLinkedin />
      </Link>
      <Link target="_blank" href={`https://www.reddit.com/submit?url=${url}${pathname}&title=${title}`}>
        <SocialReddit />
      </Link>
    </div>
  )
}
