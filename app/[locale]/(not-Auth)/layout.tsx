import { NotAuthLayout } from "@/components/Layouts/NotAuthLayout";

export default function Layout({ children }: ChildrenProps) {
  return <NotAuthLayout>{children}</NotAuthLayout>;
}
