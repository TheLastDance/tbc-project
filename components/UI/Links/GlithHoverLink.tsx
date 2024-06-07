"use client"
import "./GlitchHoverLink.css";
import Link from "next/link"
import { useI18n } from "@/locales/client";
import { TranslationKey } from "@/translations/translations";

interface IProps {
  href: string,
  translationKey?: TranslationKey,
  children?: React.ReactNode,
}

export function GlithHoverLink({
  href,
  translationKey,
  children
}: IProps) {
  const t = useI18n()
  const text = translationKey ? t(translationKey) : "";

  return (
    <Link
      href={href}
      data-text={text}
      className="hero-h-link glitch-h layers-h"
    >
      {children}
      {text}
    </Link>
  )
}
