import { generateDynamicMetaData } from "@/services/utils";

export async function generateMetadata({ params: { locale } }: ILocaleParam) {
  return generateDynamicMetaData("MyPosts", locale);
}

export default function layout({ children }: ChildrenProps) {
  return <>{children}</>;
}