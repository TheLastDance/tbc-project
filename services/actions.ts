"use server";
import { revalidatePath, revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { cookieExpirationOneYear } from "./utils";
import { getAnyData } from "./data-fetch/getAnyData";
import { BASE_URL, BLOB_CHECK_URL, IMG_MAX_SIZE } from "./constants";
import { getSession } from "@auth0/nextjs-auth0";
import { sql } from "@vercel/postgres";
import { ContactPageMessages, SuccessMessages } from "@/enums";
import { del, put } from "@vercel/blob";

export async function setTranslateCookie(locale: Locale) {
  const cookieStore = cookies();

  cookieStore.set("Next-Locale", locale, { expires: cookieExpirationOneYear });
}

export async function editUser(data: FormData, prevPicture: string, userId?: string) {
  const session = await getSession();
  const id = userId || session?.user.sub;

  const { given_name, family_name, birth_date } = Object.fromEntries(data);
  const image = data.get('image') as File;

  try {
    if (!given_name || !family_name || !id) throw new Error('name and last name required');
    if (image.size > IMG_MAX_SIZE) throw new Error('image size should be less than 1mb');

    if (image.size) {
      if (prevPicture.includes(BLOB_CHECK_URL)) await del(prevPicture);

      const blob = await put(image.name, image, {
        access: 'public',
      });

      if (id && blob.url) {
        await sql`
          UPDATE users SET 
          given_name = ${`${given_name}`}, 
          family_name = ${`${family_name}`}, 
          birth_date = ${`${birth_date}`}, 
          picture = ${`${blob.url}`} 
          WHERE id = ${id};
          `;
      }

    } else {
      await sql`UPDATE users SET given_name = ${`${given_name}`}, family_name = ${`${family_name}`}, birth_date = ${`${birth_date}`} WHERE id = ${id};`;
    }

    revalidatePath('/');
    return { message: SuccessMessages.Profile }
  } catch (error) {
    console.log(error)
    return { error: (error as Error).message }
  }
}

async function updateCart(apiUrl: string, item_id: number) {
  const user = await getSession();

  await getAnyData(`${BASE_URL}/api/carts/${apiUrl}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Cookie': `user_id=${user!.user.sub};`,
    },
    body: JSON.stringify({ item_id })
  });
}

export async function incrementCart(item_id: number) {
  await updateCart("update-cart", item_id);
  revalidateTag("cart")
}

export async function decrementCart(item_id: number) {
  await updateCart("decrement-cart", item_id);
  revalidateTag("cart")
}

export async function deleteCartItem(item_id: number) {
  await updateCart("delete-cart-item", item_id);
  revalidateTag("cart")
}

export async function resetCart() {
  const user = await getSession();

  await getAnyData(`${BASE_URL}/api/carts/reset-cart`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Cookie': `user_id=${user!.user.sub};`,
    }
  });

  revalidateTag("cart")
}

export async function editPost(data: FormData, id: number) {
  const { title, body } = Object.fromEntries(data);
  const session = await getSession();

  try {
    if (!title || !body || !id) throw new Error('title and message fileds are required!');
    if (
      `${title}`.length > 50 ||
      `${body}`.replace(/<(.|\n)*?>/g, '').trim().length > 10000 ||
      `${body}`.replace(/<(.|\n)*?>/g, '').trim().length <= 0
    ) throw new Error('title must be less than 50 symbols and message must include from 1 to 10000 symbols!')

    const { rows } = await sql`SELECT * FROM posts WHERE id = ${id};`;
    const [user] = rows;
    const havePermission = session?.user.sub === user.user_id || session?.user.app_metadata.role === "admin";
    if (!havePermission) throw new Error('You have no permission!');

    await sql`UPDATE posts SET title = ${`${title}`}, body = ${`${body}`} WHERE id = ${id};`;

    revalidatePath("/");
    return { message: SuccessMessages.EditPost }
  } catch (error) {
    console.log(error)
    return { error: (error as Error).message }
  }
}

export async function deletePost(id: number) {
  const session = await getSession();

  try {
    if (!id) throw new Error('id required');
    const { rows } = await sql`SELECT * FROM posts WHERE id = ${id};`;
    const [user] = rows;
    const havePermission = session?.user.sub === user.user_id || session?.user.app_metadata.role === "admin";

    if (!havePermission) throw new Error('You have no permission!');

    await sql`DELETE FROM posts WHERE id = ${id};`;

    revalidatePath("/");
    return { message: SuccessMessages.DeletePost }
  } catch (error) {
    console.log(error)
    return { error: (error as Error).message }
  }
}

export async function addPost(data: FormData) {
  const { title, body } = Object.fromEntries(data);
  const session = await getSession();

  try {
    if (!title || !body) throw new Error('title and message fileds are required!');
    if (
      `${title}`.length > 50 ||
      `${body}`.replace(/<(.|\n)*?>/g, '').trim().length > 10000 ||
      `${body}`.replace(/<(.|\n)*?>/g, '').trim().length <= 0
    ) throw new Error('title must be less than 50 symbols and message must include from 1 to 10000 symbols!')
    if (!session?.user) throw new Error('You have no permission!');

    await sql`INSERT INTO posts (title, body, user_id)
      VALUES (
        ${`${title}`},
        ${`${body}`},
        ${session.user.sub}
      );`;

    revalidatePath("/blog")
    return { message: SuccessMessages.AddPost }
  } catch (error) {
    return { error: (error as Error).message }
  }
}

export async function sendMessage(_: ContactFormState, data: FormData) {
  const { firstName, lastName, tel, email, question } = Object.fromEntries(data);

  try {

    if (!firstName || !lastName || !tel || !email || !question) throw new Error("All fields are required!")
    if (String(question).length > 250) throw new Error("Question should have less than 250 symbols!")

    await sql`INSERT INTO messages (firstname,lastname,email,tel,body)
      VALUES (
        ${`${firstName}`},
        ${`${lastName}`},
        ${`${email}`},
        ${`${tel}`},
        ${`${question}`}
      );`;

    revalidatePath("/admin/contact")
    return { message: ContactPageMessages.Success }

  } catch (error) {
    return { error: (error as Error).message, message: ContactPageMessages.Fail }
  }
}