import { generateDynamicMetaData } from "@/services/utils";
import { locales } from "@/i18n.config";

export async function generateMetadata({ params: { locale } }: ILocaleParam) {
  return generateDynamicMetaData("home", locale);
}

export async function generateStaticParams() {
  return locales.map((item) => ({ locale: String(item) }));
}

export default function layout({ children }: ChildrenProp) {
  return <>{children}</>
}

