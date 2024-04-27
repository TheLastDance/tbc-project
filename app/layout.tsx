import { Inter } from "next/font/google";
import { ThemeProviders } from "@/services/providers/ThemeProvider";
import { GlobalLayout } from "@/components/Layouts/GlobalLayout";
import { cookies } from "next/headers";
import { locales } from "@/i18n.config";
import "./globals.css";

// font will be replaced in future, so I deleted it from body
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: ChildrenProps) {
  const cookieStore = cookies()
  const locale = cookieStore.get("locale")?.value;

  return (
    <html suppressHydrationWarning lang={locale ? locale : locales[0]}>
      <body className={inter.className}>
        <ThemeProviders>
          <GlobalLayout>
            {children}
          </GlobalLayout>
        </ThemeProviders>
      </body>
    </html>
  );
}
