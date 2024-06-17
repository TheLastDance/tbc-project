import "./Logo.css"
import Link from "next/link";
import { Rubik_Glitch } from "next/font/google";

const rubik_glitch = Rubik_Glitch({ subsets: ["latin"], weight: "400" });

export function Logo() {
  return (
    <div className="header_logo">
      <Link href="/" className={rubik_glitch.className}>
        <h1>CyberSphere</h1>
      </Link>
    </div>
  )
}
