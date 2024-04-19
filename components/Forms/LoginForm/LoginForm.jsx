"use client"

import "./LoginForm.css";
import { FormContainer } from "../FormContainer/FormContainer";
import { Input } from "@/components/Input/Input";
import { useState } from "react";
import { Loader } from "@/components/Loaders/Loader/Loader";
import { getAnyData } from "@/services/data-fetch/getAnyData";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleForm = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const credentials = Object.fromEntries(formData);

    const user = await getAnyData("/api/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    });

    if (user.token) {
      router.push("/");
      return router.refresh();
    }

    setError(user);
    setLoading(false);
  }

  return (
    <section className="login_container">
      <FormContainer>
        <form
          onSubmit={handleForm}
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
          {error && !loading && <div>{error}</div>}
          {loading && <Loader />}
          <button type="submit" disabled={loading}>
            Login
          </button>
        </form>
      </FormContainer>
    </section>
  )
}
