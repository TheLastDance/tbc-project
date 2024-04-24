import { generateDynamicMetaData } from "@/services/utils";

export async function generateMetadata({ params: { locale } }: ILocaleParam) {
  return generateDynamicMetaData("login", locale);
}

export default function layout({ children }: ChildrenProp) {
  return <>{children}</>;
}
