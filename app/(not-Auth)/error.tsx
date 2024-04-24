"use client";

import { Error } from "@/components/Error/Error";
import { IError } from "@/typesLuka";

export default function error({ reset }: IError) {
  return (
    <>
      <Error reset={reset} href="/login" />
    </>
  );
}
