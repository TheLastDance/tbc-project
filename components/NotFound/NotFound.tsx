import "./NotFound.css";
import Image from "next/image";
import photo from "@/public/img/error/notFound.jpg"
import { BackToHomeButton } from "./BackToHomeButton";

export function NotFound() {
  return (
    <div className="notFound_container">
      <Image src={photo} fill priority alt="not found page" sizes="100vw" />
      <BackToHomeButton />
    </div>
  )
}
