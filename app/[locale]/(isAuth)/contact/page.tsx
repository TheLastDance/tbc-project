import { AskQuestionForm } from "@/components/Forms/AskQuestionForm/AskQuestionForm";
import CallUs from "@/components/CallUs/CallUs";

export default function Contact() {
  return (
    <>
      <section>
        <AskQuestionForm />
      </section>
      <section>
        <CallUs />
      </section>
    </>
  );
}
