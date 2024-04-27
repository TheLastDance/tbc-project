"use client"

import { ThemeProvider } from "next-themes";

export function ThemeProviders({ children }: ChildrenProps) {
  return <ThemeProvider attribute="class" defaultTheme="system" enableSystem>{children}</ThemeProvider>
}
