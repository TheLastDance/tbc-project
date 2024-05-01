import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProviders } from "@/services/providers/ThemeProvider";
import { GlobalLayout } from "@/components/Layouts/GlobalLayout";
import { generateDynamicMetaData } from "@/services/utils";
import { I18nProviderClient } from "@/locales/client";
import { getStaticParams } from "@/locales/server";

// font will be replaced in future, so I deleted it from body
const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({ params: { locale } }: ILocaleParam) {
  return generateDynamicMetaData("home", locale);
}

export async function generateStaticParams() {
  return getStaticParams();
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
        <I18nProviderClient locale={locale}>
          <ThemeProviders>
            <GlobalLayout>
              {children}
            </GlobalLayout>
          </ThemeProviders>
        </I18nProviderClient>
      </body>
    </html>
  );
}
