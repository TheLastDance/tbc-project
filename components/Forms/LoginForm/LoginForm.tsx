"use client";

import "./LoginForm.css";
import { FormContainer } from "../FormContainer/FormContainer";
import { Input } from "@/components/Input/Input";
import { FormEvent, useState } from "react";
import { Loader } from "@/components/Loaders/Loader/Loader";
import { TranslateText } from "@/components/TranslateText/TranslateText";
import { usePathname } from "next/navigation";
import { login } from "@/services/actions";

export function LoginForm() {
  const pathName = usePathname();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const user = await login(formData, pathName);

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
          <button type="submit" disabled={loading}>
            <TranslateText translationKey="button.login" />
          </button>
        </form>
      </FormContainer>
    </section>
  );
}
