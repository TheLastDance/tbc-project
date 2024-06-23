import { generateDynamicMetaData } from "@/services/utils";

export async function generateMetadata({ params: { locale } }: ILocaleParam) {
  return generateDynamicMetaData("adminProducts", locale);
}

export default function layout({ children }: ChildrenProps) {
  return <>{children}</>;
}