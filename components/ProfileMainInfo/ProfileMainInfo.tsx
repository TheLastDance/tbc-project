import "./ProfileMainInfo.css";
import Image from "next/image";
import { Heading } from "../UI/GlitchEffects/Heading/Heading";
import { BASE_URL } from "@/services/constants";
import { getAnyData } from "@/services/data-fetch/getAnyData";
import { Session } from "@auth0/nextjs-auth0";

export async function ProfileMainInfo({ session }: { session: Session | null | undefined }) {

  const { user } = await getAnyData<User>(`${BASE_URL}/api/user/get-user`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(session)
  });


  return (
    <div className="profileMainInfo_card">
      <Heading level={1}>{user.email}</Heading>
      <Image src={user.picture} alt="profile avatar" width={300} height={380} priority />
    </div>
  );
}
