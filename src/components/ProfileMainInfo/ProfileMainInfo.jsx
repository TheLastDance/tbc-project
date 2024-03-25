import "./ProfileMainInfo.css"
import profile_img from "../../assets/img/profile/albert_avatar.jpg";

export function ProfileMainInfo() {
  return (
    <div className="profileMainInfo_card">
      <h1>Michael Brown</h1>
      <img src={profile_img} alt="profile avatar" />
    </div>
  )
}
