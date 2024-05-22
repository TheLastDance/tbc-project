"use client";

import "./LoginForm.css";
import { FormContainer } from "../FormContainer/FormContainer";
import { Input } from "@/components/Input/Input";
import { FormEvent, useState } from "react";
import { Loader } from "@/components/Loaders/Loader/Loader";
import { TranslateText } from "@/components/TranslateText/TranslateText";
import { login } from "@/services/actions";
import { Button } from "@/components/UI/Buttons/Button/Button";

export function LoginForm() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const user = await login(formData);

    if (user?.message) setError(user.message);
    setLoading(false);
  };

  return (
    <section className="login_container">
      <FormContainer>
        <form onSubmit={handleForm} className="loginForm">
          <h3>
            <TranslateText translationKey="form.login" /> ⬇
          </h3>
          <Input
            type="username"
            id="login_username"
            name="username"
            label={<TranslateText translationKey="form.label.userName" />}
            required
          />
          <Input
            type="password"
            id="login_password"
            name="password"
            label={<TranslateText translationKey="form.label.password" />}
            required
          />
          {error && !loading && <div>{error}</div>}
          {loading && <Loader />}
          <Button type="submit" disabled={loading} translationKey="button.login" mode="glitch" />
        </form>
      </FormContainer>
    </section>
  );
}
