import { generateDynamicMetaData } from "@/services/utils";

interface IProps {
  params: {
    id: number,
    locale: Locale,
  }
}

export async function generateMetadata({ params: { locale, id } }: IProps) {
  const { title, description } = generateDynamicMetaData("adminOrder", locale);

  return {
    title: `${title}-${id}`,
    description: description,
  }
}

export default function layout({ children }: ChildrenProps) {
  return <>{children}</>;
}