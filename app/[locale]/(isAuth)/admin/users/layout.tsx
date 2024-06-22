import { generateDynamicMetaData } from "@/services/utils";

export async function generateMetadata({ params: { locale } }: ILocaleParam) {
  return generateDynamicMetaData("adminUsers", locale);
}

export default function layout({ children }: ChildrenProps) {
  return <>{children}</>;
}