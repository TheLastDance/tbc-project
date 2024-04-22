import { cookies } from "next/headers";
import { generateDynamicMetaData } from "@/services/utils";

export async function generateMetadata() {
  const locale = cookies().get("locale")?.value;
  return generateDynamicMetaData("profile", locale);
}

export default function layout({ children }) {
  return (
    <>{children}</>
  )
}
