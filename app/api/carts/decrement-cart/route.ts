import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';

export async function PUT(request: NextRequest) {
  try {
    const user_id = request.cookies.get("user_id")?.value;
    const { item_id } = await request.json();

    if (!item_id || !user_id) throw new Error('item_id and user_id are required');

    const cart = await sql<ICartTable>`SELECT * FROM carts WHERE user_id = ${+user_id};`;

    const products = cart.rows[0].products;

    const newProduct = products.map(item => item.id === item_id ? ({ ...item, quantity: item.quantity - 1 }) : ({ ...item }))
      .filter(item => item.quantity > 0);

    await sql`UPDATE carts SET products = ${JSON.stringify(newProduct)} WHERE user_id = ${+user_id};`;
    return NextResponse.json({ message: "cart was updated!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}