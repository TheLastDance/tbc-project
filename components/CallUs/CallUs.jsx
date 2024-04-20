import "./CallUs.css"
import Link from "next/link"
import { ViberIcon } from "../Icons/Viber"
import { WhatsAppIcon } from "../Icons/WhatsApp"

export default function CallUs() {
  return (
    <div className="callUs">
      <p>Call us Directly:</p>
      <Link href="tel:+995123456789">+995123456789</Link>
      <div className="callIcons">
        <WhatsAppIcon />
        <ViberIcon />
      </div>
    </div>
  )
}
