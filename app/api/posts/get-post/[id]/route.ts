import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

interface IProps {
  params: {
    id: string;
  }
}

export const revalidate = 0;

export async function GET(_: Request, { params: { id } }: IProps) {

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
    return NextResponse.json(post, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}