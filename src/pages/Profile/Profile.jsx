import { ProfileMainInfo } from "../../components/ProfileMainInfo/ProfileMainInfo"
import { EditProfileForm } from "../../components/Forms/EditProfileForm/EditProfileForm"
import { ChangePasswordForm } from "../../components/Forms/ChangePasswordForm/ChangePasswordForm"

export function Profile() {
  return (
    <>
      <section>
        <ProfileMainInfo />
      </section>
      <section>
        <EditProfileForm />
      </section>
      <section>
        <ChangePasswordForm />
      </section>
    </>
  )
}
