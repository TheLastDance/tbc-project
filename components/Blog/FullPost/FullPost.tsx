import "./FullPost.css";
import NotFound from "@/app/[locale]/not-found";
import Link from "next/link";
import Image from "next/image";
import { getPost } from "@/services/sqlQueries/posts/getPost";
import { TranslateText } from "@/components/TranslateText/TranslateText";
import { getSession } from "@auth0/nextjs-auth0";
import { FullPostButtons } from "./Buttons/FullPostButtons";


export const revalidate = 0;

export async function FullPost({ id }: idParam) {
  //await new Promise((res) => setTimeout(res, 2000)); // for loader check
  const post = await getPost(id);

  if (!post?.title) return <NotFound />;

  const { title, body, user_serial, user_picture, added_on, user_id } = post;

  const session = await getSession();
  const isYourPost = session?.user.sub === user_id;

  const utcDate = new Date(added_on).toLocaleString();

  return (
    <article className="fullPost">
      {isYourPost && <FullPostButtons title={title} body={body} id={+id} />}
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
