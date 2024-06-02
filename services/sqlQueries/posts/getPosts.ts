import { sql } from "@vercel/postgres";
import { QueryResultRow } from "@vercel/postgres";
import { unstable_noStore as noStore } from 'next/cache';

export async function getPosts(): Promise<QueryResultRow> {
  noStore();

  try {
    const posts = await sql`
    SELECT 
      posts.*,
      users.picture AS user_picture,
      users.given_name AS user_given_name,
      users.family_name AS user_family_name,
      users.serial AS user_serial,
      users.birth_date AS user_birth_date,
      users.registration_date AS user_registration_date,
      users.role AS user_role
    FROM 
      posts
    JOIN 
      users ON posts.user_id = users.id
    ORDER BY 
      posts.id DESC;
  `;

    return posts.rows;
  } catch (error) {
    console.log(error)
    return { error }
  }
}