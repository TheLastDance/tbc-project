import { TranslateText } from "@/components/TranslateText/TranslateText"

export default function page() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        <TranslateText translationKey="verifyMessage" />
      </h1>
    </div>
  )
}
