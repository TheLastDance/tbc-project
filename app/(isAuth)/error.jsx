"use client"

export default function error({ reset }) {
  return (
    <>
      <h1>Something went wrong!</h1>
      <button onClick={() => reset()}>Reset</button>
    </>
  )
}
