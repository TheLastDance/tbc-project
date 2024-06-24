import { sql } from "@vercel/postgres";
import { QueryResultRow } from "@vercel/postgres";
import { unstable_noStore as noStore } from 'next/cache';
import { getSession } from "@auth0/nextjs-auth0";

export async function getPostsLikes(id: number): Promise<QueryResultRow> {
  noStore();
  const session = await getSession();
  const user_id = session?.user.sub;

  try {

    const { rows } = await sql`
      SELECT
      COUNT(*) FILTER (WHERE isliked = TRUE) AS like_count,
      CASE
        WHEN EXISTS (
            SELECT 1
            FROM postslikes
            WHERE post_id = ${id} AND user_id = ${user_id} AND isliked = TRUE
        ) THEN TRUE
        ELSE FALSE
      END AS user_liked
      FROM postslikes
      WHERE post_id = ${id};
    `

    return rows[0];

  } catch (error) {
    console.log(error)
    return { error }
  }
}