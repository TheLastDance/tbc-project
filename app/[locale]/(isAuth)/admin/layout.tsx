import { AdminLayout } from "@/components/Layouts/AdminLayout/AdminLayout";
import { generateDynamicMetaData } from "@/services/utils";

export async function generateMetadata({ params: { locale } }: ILocaleParam) {
  return generateDynamicMetaData("adminPannel", locale);
}

export default function layout({ children }: ChildrenProps) {
  return <AdminLayout>{children}</AdminLayout>;
}
