"use client";

import "./LoginForm.css";
import { FormContainer } from "../FormContainer/FormContainer";
import { Input } from "@/components/Input/Input";
import { FormEvent, useState } from "react";
import { Loader } from "@/components/Loaders/Loader/Loader";
import { getAnyData } from "@/services/data-fetch/getAnyData";
import { useRouter } from "next/navigation";
import { TranslateText } from "@/components/TranslateText/TranslateText";

export function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const credentials = Object.fromEntries(formData);

    const user = await getAnyData<UserToken>("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (user.token) {
      router.push("/");
      return router.refresh();
    }

    setError(user.message);
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
