import "./ProfileMainInfo.css";
import Image from "next/image";
import profile_img from "@/public/img/profile/albert_avatar.jpg";
import { Heading } from "../UI/GlitchEffects/Heading/Heading";

export function ProfileMainInfo() {
  return (
    <div className="profileMainInfo_card">
      <Heading level={1}>Michael Brown</Heading>
      <Image src={profile_img} alt="profile avatar" width={300} height={380} priority />
    </div>
  );
}
