import "./Contact.css"
import whatsApp_icon from "../../assets/icons/whatsApp.svg"
import viber_icon from "../../assets/icons/viber.svg"
import { AskQuestionForm } from "../../components/Forms/AskQuestionForm/AskQuestionForm"

export function Contact() {
  return (
    <div className="contact">
      <section className="askQuestionSection">
        <h3>
          Ask question here:
        </h3>
        <AskQuestionForm />
      </section>
      <section className="callUs">
        <p>Call us Directly:</p>
        <a href="tel:+995123456789">+995123456789</a>
        <div className="callIcons">
          <img src={whatsApp_icon} alt="whatsApp icon" />
          <img src={viber_icon} alt="viber icon" />
        </div>
      </section>
    </div>
  )
}
