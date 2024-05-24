import { sql } from '@vercel/postgres';
import { NextResponse, NextRequest } from 'next/server';
import { createCart } from '@/services/data-fetch/cart/create-cart';

export async function PUT(request: NextRequest) {
  try {
    const user_id = request.cookies.get("user_id")?.value;
    const { item_id } = await request.json();

    if (!item_id || !user_id) throw new Error('item_id and user_id are required');

    const cart = await sql<ICartTable>`SELECT * FROM usersCarts WHERE user_id = ${user_id};`;

    if (cart.rows.length) {
      let newProduct: ICartProduct;
      const products = cart.rows[0].products;
      const index = products.findIndex((item) => item.id === item_id);

      if (index === -1) {
        newProduct = { id: item_id, quantity: 1 };
        await sql`UPDATE usersCarts SET products = jsonb_insert(products,'{0}',${JSON.stringify(newProduct)}),added_on = NOW() WHERE user_id = ${user_id};`;
      }

      if (index !== -1) {
        const product = products[index];
        const path = `{${index}}`;
        newProduct = { ...product, quantity: product.quantity + 1 };
        await sql`UPDATE usersCarts SET products = jsonb_set(products,${path},${JSON.stringify(newProduct)}),added_on = NOW() WHERE user_id = ${user_id};`;
      }

    } else {
      await createCart(item_id, user_id); // first addition to cart from user should create a cart for him
    }

    return NextResponse.json({ message: "cart was updated!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}