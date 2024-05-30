import { ProfileMainInfo } from "@/components/ProfileMainInfo/ProfileMainInfo";
import { EditProfileForm } from "@/components/Forms/EditProfileForm/EditProfileForm";
import { getSession } from "@auth0/nextjs-auth0";

export default async function Profile() {
  const session = await getSession();

  return (
    <>
      <section>
        <ProfileMainInfo session={session} />
      </section>
      <section>
        <EditProfileForm user={session!.user} />
      </section>
    </>
  );
}
