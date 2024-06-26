'use client'

import { useFormState } from 'react-dom'
import "./AskQuestionForm.css";
import { FormContainer } from "../FormContainer/FormContainer";
import { Input } from "@/components/Input/Input";
import { TranslateText } from "@/components/TranslateText/TranslateText";
import { PendingButton } from "@/components/Buttons/PendingButton/PendingButton";
import { CheckLottie } from "@/components/Lotties/Check/CheckLottie";
import { sendMessage } from '@/services/actions';
import { ContactPageMessages } from '@/enums';
import toast from 'react-hot-toast';
import { useEffect } from 'react';

const initialState = {
  message: '',
}

export function AskQuestionForm() {
  const [state, formAction] = useFormState<ContactFormState, FormData>(sendMessage, initialState);

  useEffect(() => {
    if (state?.error) toast.error(state.error, { duration: 5000 });
  }, [state])

  return (
    <FormContainer>
      {state?.message !== ContactPageMessages.Success ?
        <form className="askQuestionForm" action={formAction}>
          <h3>
            <TranslateText translationKey="form.askQuestionForm" />
          </h3>
          <Input
            type="text"
            name="firstName"
            id="askQuestionForm_firstName"
            label={<TranslateText translationKey="form.label.firstName" />}
            required
          />

          <Input
            type="text"
            name="lastName"
            id="askQuestionForm_lastName"
            label={<TranslateText translationKey="form.label.lastName" />}
            required
          />

          <Input
            type="email"
            name="email"
            id="askQuestionForm_email"
            label={<TranslateText translationKey="form.label.email" />}
            required
          />

          <Input
            type="tel"
            name="tel"
            id="askQuestionForm_tel"
            label={<TranslateText translationKey="form.label.phoneNumber" />}
            pattern="[0-9]{10}|[0-9]{9}"
            required
          />

          <Input
            name="question"
            id="askQuestionForm_question"
            label={<TranslateText translationKey="form.label.yourQuestion" />}
            textArea
            rows={5}
            maxLength={250}
            required
          />

          <PendingButton loader type="submit" translationKey="button.send" mode="glitchHover" />
        </form> :
        <CheckLottie />
      }
    </FormContainer>
  );
}
