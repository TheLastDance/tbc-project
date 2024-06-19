import "./ProfileMainInfo.css";
import Image from "next/image";

export async function ProfileMainInfo({ user, children }: { user: IUser, children?: React.ReactNode }) {

  return (
    <section className="profile_container">
      <div className="profileMainInfo">
        <Image src={user.picture} alt="profile avatar" width={500} height={500} priority />
      </div>
      {children}
    </section>
  );
}
