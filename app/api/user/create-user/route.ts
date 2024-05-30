import { sql } from '@vercel/postgres';
import { NextRequest } from 'next/server';
import { getSession } from '@auth0/nextjs-auth0';
import { redirect } from 'next/navigation';

export async function GET(_: NextRequest) {
  try {
    const session = await getSession();

    if (session?.user) {
      const { email, sub, picture } = session.user;

      const user = await sql`SELECT * FROM users2 WHERE id = ${sub}`;

      if (!user.rows.length) await sql`INSERT INTO users2 (id, email, picture) VALUES (${sub}, ${email}, ${picture});`;


    } else {
      return redirect("/api/auth/logout")
    }

  } catch (error) {
    return redirect("/api/auth/logout")
  }

  return redirect("/profile")
}