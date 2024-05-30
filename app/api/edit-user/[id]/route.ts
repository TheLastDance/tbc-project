import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

interface IProps {
  params: {
    id: string;
  }
}

export async function PUT(request: Request, { params: { id } }: IProps) {
  const { given_name, family_name, birth_date }: IUser = await request.json();

  try {
    if (!given_name || !family_name || !id) throw new Error('name, email, birthDate and ID names required');
    await sql`UPDATE users SET given_name = ${given_name}, family_name = ${family_name}, birth_date = ${birth_date} WHERE id = ${id};`;
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error }, { status: 500 });
  }

  const users = await sql`SELECT * FROM users;`;
  return NextResponse.json({ users }, { status: 200 });
}