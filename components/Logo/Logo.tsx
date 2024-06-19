import "./Logo.css"
import Link from "next/link";
import { Heading } from "../UI/GlitchEffects/Heading/Heading";

export function Logo() {
  return (
    <div className="header_logo">
      <Link href="/">
        <h1>
          <Heading>CyberSphere</Heading>
        </h1>
      </Link>
    </div>
  )
}
