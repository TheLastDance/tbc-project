import { CheckLottie } from "@/components/Lotties/Check/CheckLottie"
import { TranslateText } from "@/components/TranslateText/TranslateText"


export default function SuccessOrder() {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        flexGrow: "1",
        alignItems: "center",
        textAlign: "center"
      }}>
      <CheckLottie />
      <h1>
        <TranslateText translationKey="successOrderMessage" />
      </h1>
    </section>
  )
}
