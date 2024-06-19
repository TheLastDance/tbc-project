"use client"
import { Button } from "../UI/Buttons/Button/Button";
import { useRouter } from "next/navigation";
import { MotionDiv } from "../MotionDiv/MotionDiv";

export function BackToHomeButton() {
  const { push } = useRouter();

  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <Button mode="glitch" type="button" translationKey="homePage" onClick={() => push("/")} />
    </MotionDiv>
  )
}
