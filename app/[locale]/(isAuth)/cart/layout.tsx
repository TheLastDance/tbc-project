import { generateDynamicMetaData } from "@/services/utils";

export async function generateMetadata({ params: { locale } }: ILocaleParam) {
  return generateDynamicMetaData("cart", locale);
}

export default function layout({ children }: ChildrenProps) {
  return <>{children}</>;
}
