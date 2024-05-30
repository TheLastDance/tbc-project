import { AuthLayout } from "@/components/Layouts/AuthLayout";

export default function Layout({ children }: ChildrenProps) {
  return <AuthLayout>{children}</AuthLayout>;
}
