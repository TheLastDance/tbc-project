"use client"
import { Error } from "@/components/Error/Error"

export default function error({ reset }) {
  return (
    <>
      <Error reset={reset} href="/" />
    </>
  )
}
