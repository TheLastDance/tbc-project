"use client"

import "./NewsletterForm.css"
import { useState } from "react"
import { Input } from "@/components/Input/Input"
import { TranslateText } from "@/components/TranslateText/TranslateText"

export function NewsletterForm() {
  const [email, setEmail] = useState("")

  return (
    <form className="newsletterForm" onSubmit={(e) => e.preventDefault()}>
      <Input
        type="email"
        name="email"
        id="footer_email_input"
        label={<TranslateText translationKey="form.newsletterForm.label" />}
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type='submit'>
        <TranslateText translationKey="form.newsletterForm.button.submit" />
      </button>
    </form>
  )
}
