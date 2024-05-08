import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

interface IProps {
  params: {
    id: number;
  }
}

export async function PUT(request: Request, { params: { id } }: IProps) {
  const { name, email, birthDate }: IUser = await request.json();
  var id = id;

  try {
    if (!name || !email || !birthDate || !id) throw new Error('name, email, birthDate and ID names required');
    await sql`UPDATE users SET name = ${name}, email = ${email}, "birthDate" = ${birthDate} WHERE id = ${+id};`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const users = await sql`SELECT * FROM users;`;
  return NextResponse.json({ users }, { status: 200 });
}