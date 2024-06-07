import { ProfileMainInfo } from "@/components/ProfileMainInfo/ProfileMainInfo";
import { EditProfileForm } from "@/components/Forms/EditProfileForm/EditProfileForm";
import { getUser } from "@/services/sqlQueries/users/getUser";

export default async function Profile() {
  const user = await getUser() as IUser;

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
