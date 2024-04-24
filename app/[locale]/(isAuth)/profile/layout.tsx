import { generateDynamicMetaData } from "@/services/utils";

export async function generateMetadata({ params: { locale } }: ILocaleParam) {
  return generateDynamicMetaData("profile", locale);
}

export default function layout({ children }: ChildrenProp) {
  return <>{children}</>;
}
