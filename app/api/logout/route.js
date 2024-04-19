import { cookies } from "next/headers";

export async function GET(req) {
  const cookieStore = cookies();

  cookieStore.delete("token");

  return Response.json({ message: "token was deleted" })
}