import "./FullPost.css";
import NotFound from "@/app/[locale]/not-found";
import Link from "next/link";
import Image from "next/image";
import { getPost } from "@/services/sqlQueries/posts/getPost";
import { TranslateText } from "@/components/TranslateText/TranslateText";
// import { BASE_URL } from "@/services/constants";
// import { getAnyData } from "@/services/data-fetch/getAnyData";

export const revalidate = 0;

export async function FullPost({ id }: idParam) {
  //await new Promise((res) => setTimeout(res, 2000)); // for loader check
  // DONT NEED TO USE ROUTE HANDLER, WE CAN DIRECTLY FETCH FROM DB IN SERVER COMPONENTS
  const post = await getPost(id);
  //const post = await getAnyData<IPostItem>(`${BASE_URL}/api/posts/get-post/${id}`, { cache: "no-store" })

  if (!post.title) return <NotFound />;

  const { title, body, user_serial, user_picture, added_on } = post;

  const utcDate = new Date(added_on).toLocaleString();

  return (
    <article className="fullPost">
      <div className="fullPost_titleAndPhoto_container">
        <h1>{title}</h1>
        <Link href={`/user/${user_serial}`}>
          <Image
            src={user_picture}
            alt="profile avatar"
            width={350}
            height={350}
            priority
          />
        </Link>

      </div>
      <p className="fullPost_text">{body}</p>
      <div className="fullPost_info">
        <p>
          <span>
            <TranslateText translationKey="fullPost.published" />{" "}
          </span>
          {utcDate}
        </p>
      </div>
    </article>
  );
}
