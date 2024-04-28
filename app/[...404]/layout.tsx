import { Inter } from "next/font/google";
import { ThemeProviders } from "@/services/providers/ThemeProvider";
import { GlobalLayout } from "@/components/Layouts/GlobalLayout";
import { NotAuthLayout } from "@/components/Layouts/NotAuthLayout";
import "../[locale]/globals.css"

// font will be replaced in future, so I deleted it from body
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Page Not Found!"
}

export default function RootLayout({ children }: ChildrenProps) {

  return (
    <html suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProviders>
          <GlobalLayout>
            <NotAuthLayout>
              {children}
            </NotAuthLayout>
          </GlobalLayout>
        </ThemeProviders>
      </body>
    </html>
  );
}