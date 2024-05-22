import { AuthLayout } from "@/components/Layouts/AuthLayout";

export default async function Layout({ children }: ChildrenProps) {
  return <AuthLayout>{children}</AuthLayout>;
}
