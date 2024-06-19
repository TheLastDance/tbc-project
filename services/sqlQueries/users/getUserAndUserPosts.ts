import { sql } from "@vercel/postgres";
import { QueryResultRow } from "@vercel/postgres";
import { unstable_noStore as noStore } from 'next/cache';

export async function getUserAndUserPosts(id: number): Promise<QueryResultRow> {
  noStore();

  try {

    const res = await sql`
      SELECT 
        u.*, 
        COALESCE(
        array_agg(
            json_build_object(
                'id', p.id,
                'title', p.title
            ) ORDER BY p.id DESC
        ) FILTER (WHERE p.id IS NOT NULL), 
        '{}'
    ) AS posts
      FROM 
        users u
      LEFT JOIN 
        posts p ON u.id = p.user_id
      WHERE 
        u.serial = ${id}
      GROUP BY 
        u.id;
      `;

    const user = res.rows[0];

    return user;
  } catch (error) {
    console.log(error)
    return { error }
  }
}