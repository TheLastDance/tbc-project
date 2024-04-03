import "./Post.css"
import { Card } from "@/components/Card/Card";
import Link from "next/link";
import Image from "next/image";
import like_icon from "@/public/icons/like-icon.svg";

export function Post({ item }) {
  const { title, body, tags, reactions, date, photo } = item;

  return (
    <Card>
      <div className="titleAndPhoto_container">
        <h3>{title}</h3>
        <Image
          src={photo}
          alt="profile avatar"
          width={150}
          height={150}
        />
      </div>
      <p className="blog_text">{body}</p>
      <p>{date}</p>
      <div className="post_info">
        <ul>
          {tags.map((item, index) =>
            <li className="blog_tag" key={index}>
              <Link href="/">{`#${item}`}</Link>
            </li>
          )}
        </ul>
        <button className="post_info_like_button">
          <Image src={like_icon} alt="like" />
          <span>{reactions}</span>
        </button>
      </div>
      <button type='button'>View full</button>
    </Card>
  )
}
