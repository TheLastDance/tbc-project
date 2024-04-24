import { Inter } from "next/font/google";
import { ThemeProviders } from "@/services/providers/ThemeProvider";
import { LanguageProvider } from "@/services/providers/LanguageProvider";
import { GlobalLayout } from "@/components/Layouts/GlobalLayout";
import { generateDynamicMetaData } from "@/services/utils";
import { cookies } from "next/headers";
import "./globals.css";

// font will be replaced in future, so I deleted it from body
const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata() {
  const locale = cookies().get("locale")?.value;
  return generateDynamicMetaData("home", locale);
}

export default function RootLayout({ children }: ChildrenProp) {
  const locale = cookies().get("locale")?.value || "en";

  return (
    <html suppressHydrationWarning lang={locale}>
      <body className={inter.className}>
        <ThemeProviders>
          <LanguageProvider>
            <GlobalLayout>{children}</GlobalLayout>
          </LanguageProvider>
        </ThemeProviders>
      </body>
    </html>
  );
}
