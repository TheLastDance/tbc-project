import { NotAuthLayout } from "@/components/Layouts/NotAuthLayout";

export default function RootLayout({ children }) {
  return (
    <NotAuthLayout>
      {children}
    </NotAuthLayout>
  );
}