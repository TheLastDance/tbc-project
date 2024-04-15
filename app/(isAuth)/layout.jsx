import { AuthLayout } from "@/components/Layouts/AuthLayout";

export const metadata = {
  title: "TBC Project 🚀",
  description: "This project was developed as part of the TBC Academy React Acceleration programm.",
};

export default function RootLayout({ children }) {
  return (
    <AuthLayout>
      {children}
    </AuthLayout>
  );
}
