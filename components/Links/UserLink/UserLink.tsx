import { getUser } from "@/services/sqlQueries/users/getUser";
import "./UserLink.css";
import Link from "next/link";
import Image from "next/image";

export async function UserLink() {
  const { picture } = await getUser() as IUser;
  return (
    <Link href="/profile" className="userProfileAvatar_link">
      <Image
        src={picture}
        alt="avatar"
        fill
        sizes="2rem"
      />
    </Link>
  )
}
