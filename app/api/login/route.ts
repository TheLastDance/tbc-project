import { cookies } from "next/headers";
import { cookieExpirationOneYear } from "@/services/utils";
import { NextRequest } from "next/server";
import { UserInfoType } from "@/typesLuka";

export async function POST(req: NextRequest) {
  const { username, password }: UserInfoType = await req.json();

  const response = await fetch("https://dummyjson.com/auth/login", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });

  const user: UserInfoType = await response.json();

  if (!response.ok) return Response.json(user.message);

  const cookieStore = cookies();
  cookieStore.set("token", user.token, { httpOnly: true, expires: cookieExpirationOneYear });

  return Response.json(user);
}