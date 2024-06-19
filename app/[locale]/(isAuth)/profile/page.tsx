import { ProfileMainInfo } from "@/components/ProfileMainInfo/ProfileMainInfo";
import { EditProfileForm } from "@/components/Forms/EditProfileForm/EditProfileForm";
import { getUser } from "@/services/sqlQueries/users/getUser";
import { Suspense } from "react";
import { Loader } from "@/components/Loaders/Loader/Loader";
import { setStaticParamsLocale } from "next-international/server";
import { TranslateTextServer } from "@/components/TranslateText/TranslateTextServer";

interface IProps {
  params: {
    locale: Locale
  }
}

export default async function Profile({ params: { locale } }: IProps) {
  setStaticParamsLocale(locale);
  const user = await getUser() as IUser;
  const utcDate = new Date(user.registration_date).toLocaleDateString();

  return (

    <Suspense fallback={<Loader />}>
      <ProfileMainInfo user={user}>
        <p>
          <span>
            <TranslateTextServer translationKey="email" />:
          </span>{" "}
          {user.email}
        </p>
        <p>
          <span>
            <TranslateTextServer translationKey="regDate" />:
          </span>{" "}
          {utcDate}
        </p>
        <EditProfileForm user={user} />
      </ProfileMainInfo>
    </Suspense>

  );
}
