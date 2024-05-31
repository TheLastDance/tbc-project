import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';

export async function PUT(request: NextRequest) {
  try {
    const user_id = request.cookies.get("user_id")?.value;
    if (!user_id) throw new Error('user_id required');

    await sql`UPDATE carts SET products = ${JSON.stringify([])} WHERE user_id = ${user_id};`;
    return NextResponse.json({ message: "cart was reset!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}