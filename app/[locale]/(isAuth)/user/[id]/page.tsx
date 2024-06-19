import NotFound from "@/app/[locale]/not-found";
import { ProfileMainInfo } from "@/components/ProfileMainInfo/ProfileMainInfo";
import { setStaticParamsLocale } from "next-international/server";
import { TranslateTextServer } from "@/components/TranslateText/TranslateTextServer";
import { calculateAge } from "@/services/utils";
import { getUserAndUserPosts } from "@/services/sqlQueries/users/getUserAndUserPosts";
import { LatestPostsList } from "@/components/LatestPostsList/LatestPostsList";

interface IProps {
  params: {
    id: number,
    locale: Locale,
  }
  searchParams?: {
    page?: string,
  }
}

export const revalidate = 0;

export default async function page({ params: { id, locale }, searchParams }: IProps) {
  setStaticParamsLocale(locale);
  const profile = await getUserAndUserPosts(id) as IUserAndPosts;

  if (!profile?.id) return <NotFound />;

  const { registration_date, birth_date, given_name, family_name, posts } = profile;
  const utcDate = (date: Date | string) => new Date(date).toLocaleDateString();

  return (
    <>
      <ProfileMainInfo user={profile}>
        <p>
          <span>
            <TranslateTextServer translationKey="name" />:
          </span>{" "}
          {given_name}
        </p>
        <p>
          <span>
            <TranslateTextServer translationKey="lastName" />:
          </span>{" "}
          {family_name}
        </p>
        <p>
          <span>
            <TranslateTextServer translationKey="regDate" />:
          </span>{" "}
          {utcDate(registration_date)}
        </p>
        {birth_date &&
          <>
            <p>
              <span>
                <TranslateTextServer translationKey="birthDate" />:
              </span>{" "}
              {utcDate(birth_date)}
            </p>
            <p>
              <span>
                <TranslateTextServer translationKey="age" />:
              </span>{" "}
              {calculateAge(birth_date)}
            </p>
          </>
        }
        <LatestPostsList posts={posts} params={searchParams!} />
      </ProfileMainInfo>
    </>
  )
}
