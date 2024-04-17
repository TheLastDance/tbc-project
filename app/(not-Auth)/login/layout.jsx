import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export const metadata = {
  title: "Login Page",
  description: "Login to continue.",
};

export default function layout({ children }) {
  const cookieStore = cookies();

  const token = cookieStore.get("token")?.value;

  if (token) redirect("/");

  return (
    <>{children}</>
  )
}
