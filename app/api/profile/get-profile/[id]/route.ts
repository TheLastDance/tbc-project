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
    const { rows } = await sql`SELECT * FROM users WHERE serial = ${+id} LIMIT 1`;
    const [profile] = rows;
    return NextResponse.json(profile, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}