import { Inter } from "next/font/google";
import "./globals.css";
import { GlobalLayout } from "@/components/Layouts/GlobalLayout";
import { ThemeProviders } from "@/services/providers/ThemeProvider";

// font will be replaced in future, so I deleted it from body
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TBC Project 🚀",
  description: "This project was developed as part of the TBC Academy React Acceleration programm.",
  icons: {
    icon: "/icons/like-icon.svg"
  }
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <body>
        <ThemeProviders>
          <GlobalLayout>
            {children}
          </GlobalLayout>
        </ThemeProviders>
      </body>
    </html>
  );
}