import "./CallUs.css"
import whatsApp_icon from "@/public/icons/whatsApp.svg"
import viber_icon from "@/public/icons/viber.svg"
import Image from "next/image"
import Link from "next/link"

export default function CallUs() {
  return (
    <div className="callUs">
      <p>Call us Directly:</p>
      <Link href="tel:+995123456789">+995123456789</Link>
      <div className="callIcons">
        <Image src={whatsApp_icon} alt="whatsApp icon" />
        <Image src={viber_icon} alt="viber icon" />
      </div>
    </div>
  )
}
