import { cookies } from "next/headers";
import { generateDynamicMetaData } from "@/services/utils";

export async function generateMetadata() {
  const locale = cookies().get("locale")?.value;
  return generateDynamicMetaData("login", locale);
}

export default function layout({ children }: ChildrenProp) {
  return <>{children}</>;
}