"use client"

import "./LoginForm.css";
import { FormContainer } from "../FormContainer/FormContainer";
import { Input } from "@/components/Input/Input";
import { login } from "@/services/actions";
import { useFormState } from "react-dom";
import { useOptimistic } from "react";
import { Loader } from "@/components/Loaders/Loader/Loader";

export function LoginForm() {
  const [error, formAction] = useFormState(login, "");
  const [optimisticState, addOptimistic] = useOptimistic(
    error,
    () => <Loader />
  );

  const handleForm = async (data) => {
    addOptimistic();
    await formAction(data);
  }

  return (
    <section className="login_container">
      <FormContainer>
        <form
          action={handleForm}
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
          {optimisticState && <div>{optimisticState}</div>}
          <button type="submit">Login</button>
        </form>
      </FormContainer>
    </section>
  )
}
