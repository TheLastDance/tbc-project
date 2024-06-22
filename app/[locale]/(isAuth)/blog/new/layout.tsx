import { generateDynamicMetaData } from "@/services/utils";

export async function generateMetadata({ params: { locale } }: ILocaleParam) {
  return generateDynamicMetaData("newPost", locale);
}

export default function layout({ children }: ChildrenProps) {
  return <>{children}</>;
}