import { generateDynamicMetaData } from "@/services/utils";
import { ProfileLayout } from "@/components/Layouts/ProfileLayout/ProfileLayout";

export async function generateMetadata({ params: { locale } }: ILocaleParam) {
  return generateDynamicMetaData("profile", locale);
}

export default function layout({ children }: ChildrenProps) {
  return <ProfileLayout>{children}</ProfileLayout>;
}
