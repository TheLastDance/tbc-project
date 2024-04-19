import { cookies } from "next/headers";

export async function POST(req) {
  const { username, password } = await req.json();

  const response = await fetch("https://dummyjson.com/auth/login", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });

  const user = await response.json();

  if (!response.ok) return Response.json(user.message);

  const cookieStore = cookies();
  cookieStore.set("token", user.token, { httpOnly: true });

  return Response.json(user);
}