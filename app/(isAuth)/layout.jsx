import { AuthLayout } from "@/components/Layouts/AuthLayout";

export default function RootLayout({ children }) {

  return (
    <AuthLayout>
      {children}
    </AuthLayout>
  );
}
