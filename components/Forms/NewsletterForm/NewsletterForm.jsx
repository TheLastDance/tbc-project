"use client"

import "./NewsletterForm.css"
import { useState } from "react"
import { Input } from "@/components/Input/Input"

export default function NewsletterForm() {
  const [email, setEmail] = useState("")

  return (
    <form className="newsletterForm" onSubmit={(e) => e.preventDefault()}>
      <Input
        type="email"
        name="email"
        id="footer_email_input"
        label="Subscribe to our newsletter:"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type='submit'>Submit</button>
    </form>
  )
}