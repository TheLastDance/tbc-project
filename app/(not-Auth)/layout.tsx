import { NotAuthLayout } from "@/components/Layouts/NotAuthLayout";
import { ChildrenProp } from "@/typesLuka";

export default function Layout({ children }: ChildrenProp) {
  return <NotAuthLayout>{children}</NotAuthLayout>;
}
