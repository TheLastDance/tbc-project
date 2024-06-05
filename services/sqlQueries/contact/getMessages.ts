import { sql } from "@vercel/postgres";
import { QueryResultRow } from "@vercel/postgres";
import { unstable_noStore as noStore } from 'next/cache';

export async function getMessages(): Promise<QueryResultRow> {
  noStore();

  try {
    const messages = await sql`SELECT * FROM messages ORDER BY messages.id DESC;`;
    return messages.rows;
  } catch (error) {
    console.log(error)
    return { error }
  }
}