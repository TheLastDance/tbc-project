import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

interface IProps {
  params: {
    id: string;
  }
}

export async function DELETE(_: Request, { params: { id } }: IProps) {

  try {
    if (!id) throw new Error('ID is required');

    await sql`DELETE FROM users WHERE id = ${+id};`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const users = await sql`SELECT * FROM users;`;

  return NextResponse.json({ users }, { status: 200 });
}