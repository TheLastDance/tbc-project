import { AuthLayout } from "@/components/Layouts/AuthLayout";

export default async function Layout({ children }) {

  return (
    <AuthLayout>
      {children}
    </AuthLayout>
  );
}
