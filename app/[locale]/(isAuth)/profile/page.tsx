import { ProfileMainInfo } from "@/components/ProfileMainInfo/ProfileMainInfo";
import { EditProfileForm } from "@/components/Forms/EditProfileForm/EditProfileForm";
import { getSession } from "@auth0/nextjs-auth0";
import { getAnyData } from "@/services/data-fetch/getAnyData";
import { BASE_URL } from "@/services/constants";

export default async function Profile() {
  const session = await getSession();
  const user = await getAnyData<IUser>(`${BASE_URL}/api/user/get-user`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(session)
  });

  return (
    <>
      <section>
        <ProfileMainInfo user={user} />
      </section>
      <section>
        <EditProfileForm user={user} />
      </section>
    </>
  );
}
