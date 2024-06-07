"use server";
import { IMG_MAX_SIZE } from "@/services/constants";
import { getSession } from "@auth0/nextjs-auth0";
import { put } from "@vercel/blob";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { SuccessMessages } from "@/enums";

export async function addProduct(data: FormData) {
  const session = await getSession();
  const isAdmin = session?.user.app_metadata.role === "admin";
  const { title, description, gender, category, brand, price } = Object.fromEntries(data);
  const images = data.getAll("images") as File[];

  try {
    if (!isAdmin) throw new Error("You have no permission for that!");
    if (!title || !description || !gender || !category || !brand || !price) throw new Error("All fields are required!");
    if (!images[0].size) throw new Error("Images are required!");
    let blobUrls = [];

    for (const image of images) {
      if (image.size > IMG_MAX_SIZE) throw new Error('image size should be less than 1mb');
    }

    for (const image of images) {
      const blob = await put(image.name, image, {
        access: 'public',
      });

      blobUrls.push(blob.url);
    }

    await sql`
      INSERT INTO products (title, description, brand, category, gender, price, images) 
      VALUES(
      ${`${title}`},
      ${`${description}`},
      ${`${brand}`},
      ${`${category}`},
      ${`${gender}`},
      ${`${price}`},
      ${JSON.stringify(blobUrls)}
      )
    `;

    revalidatePath('/');
    return { message: SuccessMessages.AddProduct }
  } catch (error) {
    console.log(error)
    return { error: (error as Error).message }
  }
}