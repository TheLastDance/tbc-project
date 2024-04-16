"use client"

import "./LoginForm.css";
import { FormContainer } from "../FormContainer/FormContainer";
import { Input } from "@/components/Input/Input";
import { login } from "@/services/actions";
import { useFormState } from "react-dom";

export function LoginForm() {
  const [error, formAction] = useFormState(login, "");

  return (
    <section className="login_container">
      <FormContainer>
        <form
          action={formAction}
          className="loginForm"
        >
          <h3>Please login into your account ⬇ </h3>
          <Input
            type="username"
            id="login_username"
            name="username"
            label="Username:"
            required
          />
          <Input
            type="password"
            id="login_password"
            name="password"
            label="Password:"
            required
          />
          {error && <p>{error}</p>}
          <button type="submit">Login</button>
        </form>
      </FormContainer>
    </section>
  )
}
