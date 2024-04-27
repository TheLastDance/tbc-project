"use client";

import { Error } from "@/components/Error/Error";

export default function error({ reset }: IErrorPage) {
  return (
    <>
      <Error reset={reset} />
    </>
  );
}
