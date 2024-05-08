import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { name, email, birthDate }: IUser = await request.json();

  try {
    if (!name || !email || !birthDate) throw new Error('name, email and birthDate names required');
    await sql`INSERT INTO users (name, email, "birthDate") VALUES (${name}, ${email}, ${birthDate});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const users = await sql`SELECT * FROM users;`;
  return NextResponse.json({ users }, { status: 200 });
}