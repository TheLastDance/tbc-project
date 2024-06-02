import { BASE_URL } from "@/services/constants";
import { getAnyData } from "@/services/data-fetch/getAnyData";
import NotFound from "@/app/[locale]/not-found";

interface IProps {
  params: {
    id: number
  }
}

export const revalidate = 0;

export default async function page({ params: { id } }: IProps) {
  const profile = await getAnyData<IUser>(`${BASE_URL}/api/profile/get-profile/${id}`, { cache: "no-store" });
  const { given_name, family_name } = profile

  if (!profile.id) return <NotFound />;

  return (
    <div>
      <p>
        <span>First Name:</span>
        {given_name}
      </p>
      <p>
        <span>Last Name:</span>
        {family_name}
      </p>
    </div>
  )
}
