import { sql } from "@vercel/postgres";
import { QueryResultRow } from "@vercel/postgres";
import { unstable_noStore as noStore } from 'next/cache';
import { getSession } from "@auth0/nextjs-auth0";

export async function getUser(): Promise<QueryResultRow> {
  noStore();

  try {
    const session = await getSession();
    if (session?.user) {
      const { sub } = session.user;

      const res = await sql`SELECT * FROM users WHERE id = ${sub}`;

      const user = res.rows[0];

      return user;
    }

    return { message: "no user session detected" }

  } catch (error) {
    console.log(error)
    return { error: (error as Error).message }
  }
}