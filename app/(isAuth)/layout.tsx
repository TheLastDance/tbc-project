import { AuthLayout } from "@/components/Layouts/AuthLayout";
import { ChildrenProp } from "@/typesLuka";

export default async function Layout({ children }: ChildrenProp) {
  return <AuthLayout>{children}</AuthLayout>;
}
