import "./Contact.css"
import { AskQuestionForm } from "../Forms/AskQuestionForm/AskQuestionForm"
import { CallUs } from "../CallUs/CallUs"
import Image from "next/image"
import photo from "@/public/img/backgrounds/contactbackground.jpeg"

export function Contact() {
  return (
    <section className="contactPage_container">
      <div className="contactPage_landscape">
        <Image
          src={photo}
          alt="photo landscape"
          sizes="100vw"
          fill
          priority
          quality={100}
          placeholder="blur"
        />
        <CallUs />
      </div>
      <div className="contactForm_container">
        <AskQuestionForm />
      </div>
    </section>
  )
}
