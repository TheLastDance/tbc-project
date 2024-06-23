import { getUserAndUserPosts } from "@/services/sqlQueries/users/getUserAndUserPosts";
import { generateDynamicMetaData } from "@/services/utils";

interface IProps {
  params: {
    id: number,
    locale: Locale,
  }
}

export async function generateMetadata({ params: { id, locale } }: IProps) {
  const profile = await getUserAndUserPosts(id) as IUserAndPosts;
  const { description } = generateDynamicMetaData("user", locale);

  if (!profile?.id) return { title: "User not found!" };

  const { given_name, family_name } = profile;

  return {
    title: `${given_name} ${family_name}`,
    description: `${given_name} ${family_name} ${description}`,
  };
}


export default function layout({ children }: ChildrenProps) {
  return <>{children}</>;
}