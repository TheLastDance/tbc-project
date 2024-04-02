import "./Contact.css"
import whatsApp_icon from "@/public/icons/whatsApp.svg"
import viber_icon from "@/public/icons/viber.svg"
import Image from "next/image"
import { AskQuestionForm } from "@/components/Forms/AskQuestionForm/AskQuestionForm"

export default function Contact() {
  return (
    <div className="contact">
      <section className="askQuestionSection">
        <AskQuestionForm />
      </section>
      <section className="callUs">
        <p>Call us Directly:</p>
        <a href="tel:+995123456789">+995123456789</a>
        <div className="callIcons">
          <Image src={whatsApp_icon} alt="whatsApp icon" />
          <Image src={viber_icon} alt="viber icon" />
        </div>
      </section>
    </div>
  )
}
