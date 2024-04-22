import "./CallUs.css"
import Link from "next/link"
import { ViberIcon } from "../Icons/Viber"
import { WhatsAppIcon } from "../Icons/WhatsApp"
import { TranslateText } from "../TranslateText/TranslateText"

export default function CallUs() {
  return (
    <div className="callUs">
      <p>
        <TranslateText translationKey="callUs.callUsDirectly" />
      </p>
      <Link href="tel:+995123456789">+995123456789</Link>
      <div className="callIcons">
        <WhatsAppIcon />
        <ViberIcon />
      </div>
    </div>
  )
}
