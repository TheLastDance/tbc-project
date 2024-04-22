import { NotAuthLayout } from "@/components/Layouts/NotAuthLayout";

export default function Layout({ children }) {
  return (
    <NotAuthLayout>
      {children}
    </NotAuthLayout>
  );
}