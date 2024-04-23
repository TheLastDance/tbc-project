import "./FullPost.css";
import NotFound from "@/app/not-found";
import Link from "next/link";
import Image from "next/image"
import { getAnyData } from "@/services/data-fetch/getAnyData";
import photo from "@/public/img/blog/dogProfile.jpeg";
import { LikeIcon } from "@/components/Icons/Like";
import { TranslateText } from "@/components/TranslateText/TranslateText";

export async function FullPost({ id }: { id: number }) {
  //await new Promise((res) => setTimeout(res, 2000)); // for loader check
  const data: IFullPost = await getAnyData(`https://dummyjson.com/posts/${id}`);

  if (!data.title) return <NotFound />;

  const { title, body, tags, reactions } = data;

  return (
    <article className="fullPost">
      <div className="fullPost_titleAndPhoto_container">
        <h1>{title}</h1>
        <Image
          src={photo}
          alt="profile avatar"
          width={350}
          height={350}
          priority
        />
      </div>
      <p className="fullPost_text">{body}</p>
      <ul>
        {tags.map((item, index) =>
          <li className="fullPost_tag" key={index}>
            <Link href="/">{`#${item}`}</Link>
          </li>
        )}
      </ul>
      <div className="fullPost_info">
        <p>
          <span>
            <TranslateText translationKey="fullPost.published" />
            {" "}
          </span>
          2024-02-11
        </p>
        <button type="button" className="fullPost_like_button">
          <LikeIcon />
          <span>{reactions}</span>
        </button>
      </div>
    </article>
  )
}
