import { sql } from '@vercel/postgres';
import { NextResponse, NextRequest } from 'next/server';
import { getProducts } from '@/services/sqlQueries/products/getProducts';

export const revalidate = 0;

const initialState = {
  price: 0,
  count: 0,
  products: [],
}

export async function GET(req: NextRequest) {
  try {
    const user_id = req.cookies.get("user_id")?.value;

    if (!user_id) throw new Error('not auth!');

    const cart = await sql<ICartTable>`SELECT * FROM carts WHERE user_id = ${user_id};`;
    const products = await getProducts() as IProductItem[];

    if (cart.rows.length) {
      const userCart = cart.rows[0].products;

      const productMap = products.reduce((acc: { [key: string]: IProductItem }, item) => {
        acc[item.id] = { ...item, price: +item.price };
        return acc;
      }, {});

      const cartProducts = userCart.map((item) => productMap[item.id] && ({ ...productMap[item.id], quantity: item.quantity }));
      const calculatedValues = cartProducts.reduce((acc, item) => {
        acc.price = acc.price + item.price * item.quantity
        acc.count = acc.count + item.quantity
        return acc
      }, { price: 0, count: 0 })

      const info = { ...calculatedValues, products: cartProducts };
      return NextResponse.json(info, { status: 200 });
    }

    return NextResponse.json(initialState, { status: 200 }); // if user is new, return initialState
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}