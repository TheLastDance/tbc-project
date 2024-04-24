import "./ProfileMainInfo.css";
import Image from "next/image";
import profile_img from "@/public/img/profile/albert_avatar.jpg";

export function ProfileMainInfo() {
  return (
    <div className="profileMainInfo_card">
      <h1>Michael Brown</h1>
      <Image src={profile_img} alt="profile avatar" width={300} height={380} priority />
    </div>
  );
}
