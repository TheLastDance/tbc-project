import { NotAuthLayout } from "@/components/Layouts/NotAuthLayout";

export default function Layout({ children }: ChildrenProp) {
  return <NotAuthLayout>{children}</NotAuthLayout>;
}
