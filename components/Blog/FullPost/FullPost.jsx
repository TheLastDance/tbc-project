import "./FullPost.css";
import NotFoundPost from "@/app/blog/[id]/not-found";
import ArrowNavigation from "@/components/ArrowNavigation/ArrowNavigation";
import Link from "next/link";
import Image from "next/image"
import { handleFetch } from "@/utils";
import like_icon from "@/public/icons/like-icon.svg";
import photo from "@/public/img/blog/dogProfile.jpeg"

export async function FullPost({ id }) {
  const data = await handleFetch(`https://dummyjson.com/posts/${id}`);

  if (!data) return <NotFoundPost id={id} />;

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
        <p><span>Published: </span> 2024-02-11</p>
        <button type="button" className="fullPost_like_button">
          <Image src={like_icon} alt="like" />
          <span>{reactions}</span>
        </button>
      </div>
      <ArrowNavigation
        hrefPrev={`/blog/${+id - 1}`}
        hrefNext={`/blog/${+id + 1}`}
      />
    </article>
  )
}
