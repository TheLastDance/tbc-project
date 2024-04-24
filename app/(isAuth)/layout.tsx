import { AuthLayout } from "@/components/Layouts/AuthLayout";

export default async function Layout({ children }: ChildrenProp) {
  return <AuthLayout>{children}</AuthLayout>;
}
