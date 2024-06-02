import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from 'next/cache';

export async function getPost(id: number) {
  noStore();

  try {
    const { rows } = await sql`
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
      WHERE 
        posts.id = ${id}
      LIMIT 1;
    `;
    const [post] = rows;
    return post;
  } catch (error) {
    console.log(error)
    return { error }
  }
}