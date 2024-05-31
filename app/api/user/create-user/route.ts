import { sql } from '@vercel/postgres';
import { NextRequest } from 'next/server';
import { getSession } from '@auth0/nextjs-auth0';
import { redirect } from 'next/navigation';

export async function GET(_: NextRequest) {
  try {
    const session = await getSession();

    if (session?.user) {
      const { email, sub, picture, given_name, family_name, app_metadata } = session.user;
      const isRole = app_metadata.role ? app_metadata.role : "user";
      const user = await sql`SELECT * FROM users WHERE id = ${sub}`;

      if (!user.rows.length) await sql`
        INSERT INTO users (id, email, picture, given_name, family_name, role) 
        VALUES (${sub}, ${email}, ${picture}, ${given_name}, ${family_name}, ${isRole});
        `;

      if (user.rows.length && user.rows[0].role !== app_metadata.role) await sql`UPDATE users SET role = ${app_metadata.role} WHERE id = ${sub};`;

    } else {
      return redirect("/api/auth/logout")
    }

  } catch (error) {
    return redirect("/api/auth/logout")
  }

  return redirect("/profile")
}