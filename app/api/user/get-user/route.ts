import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const session = await req.json();

    if (session?.user) {
      const { sub } = session.user;

      const res = await sql`SELECT * FROM users2 WHERE id = ${sub}`;

      const user = res.rows[0];

      return NextResponse.json({ user }, { status: 500 });
    }

    return NextResponse.json({ message: "no user session detected" }, { status: 500 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}