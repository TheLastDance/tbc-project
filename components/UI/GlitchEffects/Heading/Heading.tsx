"use client"

import "./Heading.css"
import { TranslationKey } from "@/translations/translations";
import { TranslateText } from "@/components/TranslateText/TranslateText";
import { Rubik_Glitch } from "next/font/google";

const rubik_glitch = Rubik_Glitch({ subsets: ["latin"], weight: "400" });

interface IProps {
  children?: React.ReactNode;
  translationKey?: TranslationKey;
}

export function Heading({ children, translationKey }: IProps) {
  const text = translationKey ? TranslateText({ translationKey }) : "";


  return (
    <span className={`${rubik_glitch.className} heading heading-layers heading-glitch`} data-text={text || children}>
      <span>{children}</span>
      {text}
    </span>
  );
}
