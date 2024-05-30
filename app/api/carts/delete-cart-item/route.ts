import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';

export async function PUT(request: NextRequest) {
  try {
    const user_id = request.cookies.get("user_id")?.value;
    const { item_id } = await request.json();

    if (!item_id || !user_id) throw new Error('item_id and user_id are required');

    const cart = await sql<ICartTable>`SELECT * FROM carts WHERE user_id = ${user_id};`;

    if (cart.rows.length) {
      const products = cart.rows[0].products;
      const index = products.findIndex((item) => item.id === item_id);
      const path = `{${index}}`;

      if (index !== -1) await sql`UPDATE carts SET products = products#-${path},added_on = NOW() WHERE user_id = ${user_id};`;
    }

    return NextResponse.json({ message: "product was deleted!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}