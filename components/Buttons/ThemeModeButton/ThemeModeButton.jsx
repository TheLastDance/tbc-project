"use client"

import "./ThemeModeButton.css"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes";
import { MoonIcon } from "@/components/Icons/Moon";
import { SunIcon } from "@/components/Icons/Sun";

export function ThemeModeButton() {
  const [isMounted, setIsMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setIsMounted(true), []);

  if (!isMounted) return (
    <span className="mode_placeholder"></span>
  )

  return (
    <button
      className="resetButtonStyles themeButton"
      type="button"
      onClick={() => resolvedTheme === "light" ? setTheme("dark") : setTheme("light")}
      title="theme mode"
    >
      {resolvedTheme === "light" ? <MoonIcon /> : <SunIcon />}
    </button>
  )
}
