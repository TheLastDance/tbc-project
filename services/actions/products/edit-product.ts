"use server";
import { IMG_MAX_SIZE } from "@/services/constants";
import { getSession } from "@auth0/nextjs-auth0";
import { put, del } from "@vercel/blob";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { SuccessMessages } from "@/enums";

export async function editProduct(data: FormData, prevImages: string[], id: number) {
  const session = await getSession();
  const isAdmin = session?.user.app_metadata.role === "admin";
  const { title, description, gender, category, brand, price } = Object.fromEntries(data);
  const images = data.getAll("images") as File[];
  const blobImgArray = data.getAll("blobImg") as string[];
  const allImages = [...images, ...blobImgArray];

  try {
    if (!isAdmin) throw new Error("You have no permission for that!");
    if (!title || !description || !gender || !category || !brand || !price || !allImages.length) throw new Error("All fields are required!");
    if (allImages.length > 4) throw new Error("You can upload maximum 4 images!");
    let blobUrls = [];

    for (const image of images) {
      if (image.size > IMG_MAX_SIZE) throw new Error('image size should be less than 1mb');
    }

    const oldImages = prevImages.filter(item => !blobImgArray.includes(item)); // detect deleted images to then delete them from blob

    for (const image of oldImages) {
      await del(image); // deletes old images from blob
    }

    for (const image of images) {
      const blob = await put(image.name, image, {
        access: 'public',
      });

      blobUrls.push(blob.url);
    }

    await sql`
      UPDATE products SET
      title = ${`${title}`},
      description = ${`${description}`},
      brand = ${`${brand}`},
      category = ${`${category}`},
      gender = ${`${gender}`},
      price = ${`${price}`},
      images = ${JSON.stringify([...blobImgArray, ...blobUrls])}
      WHERE id = ${id};
    `;

    revalidatePath('/');
    return { message: SuccessMessages.EditProduct }
  } catch (error) {
    console.log(error)
    return { error: (error as Error).message }
  }
}