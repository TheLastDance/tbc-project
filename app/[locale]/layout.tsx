import { Inter } from "next/font/google";
import { ThemeProviders } from "@/services/providers/ThemeProvider";
import { GlobalLayout } from "@/components/Layouts/GlobalLayout";
import { locales } from "@/i18n.config";
import { generateDynamicMetaData } from "@/services/utils";
import "./globals.css";

// font will be replaced in future, so I deleted it from body
const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({ params: { locale } }: ILocaleParam) {
  return generateDynamicMetaData("home", locale);
}

export async function generateStaticParams() {
  return locales.map((item) => ({ locale: String(item) }));
}

interface IProps {
  children: React.ReactNode;
  params: {
    locale: Locale;
  }
}

export default function RootLayout({ children, params: { locale } }: IProps) {
  return (
    <html suppressHydrationWarning lang={locale}>
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
