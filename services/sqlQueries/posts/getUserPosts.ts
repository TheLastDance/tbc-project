import { sql } from "@vercel/postgres";
import { QueryResultRow } from "@vercel/postgres";
import { unstable_noStore as noStore } from 'next/cache';
import { getSession } from "@auth0/nextjs-auth0";

export async function getUserPosts(): Promise<QueryResultRow> {
  noStore();
  const session = await getSession();
  const user_id = session?.user.sub;

  try {
    const posts = await sql`SELECT * FROM posts WHERE posts.user_id = ${user_id} ORDER BY posts.id DESC;`;

    return posts.rows;
  } catch (error) {
    console.log(error)
    return { error }
  }
}