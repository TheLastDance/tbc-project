import "./ProfileMainInfo.css";
import Image from "next/image";
import { Heading } from "../UI/GlitchEffects/Heading/Heading";

export async function ProfileMainInfo({ user }: { user: IUser }) {

  return (
    <div className="profileMainInfo_card">
      <h1><Heading>{user.email}</Heading></h1>
      <Image src={user.picture} alt="profile avatar" width={300} height={380} priority />
    </div>
  );
}
