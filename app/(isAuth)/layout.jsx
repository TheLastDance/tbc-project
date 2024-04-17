import { AuthLayout } from "@/components/Layouts/AuthLayout";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function RootLayout({ children }) {
  const cookieStore = cookies();

  const token = cookieStore.get("token")

  if (!token) redirect("/login");

  return (
    <AuthLayout>
      {children}
    </AuthLayout>
  );
}
