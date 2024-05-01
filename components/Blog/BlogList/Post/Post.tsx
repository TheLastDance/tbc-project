import "./Post.css";
import { Card } from "@/components/Card/Card";
import Link from "next/link";
import Image from "next/image";
import photo from "@/public/img/blog/dogProfile.jpeg";
import { LikeIcon } from "@/components/Icons/Like";
import { TranslateTextServer } from "@/components/TranslateText/TranslateTextServer";

interface IProps {
  item: IPostItem
}

export function Post({ item }: IProps) {
  const { title, body, tags, reactions, id } = item;

  return (
    <Card>
      <div className="titleAndPhoto_container">
        <h3>{title}</h3>
        <Image src={photo} alt="profile avatar" width={150} height={150} />
      </div>
      <p className="blog_text">{body}</p>
      <p>2024-02-11</p>
      <div className="post_info">
        <ul>
          {tags.map((item, index) => (
            <li className="blog_tag" key={index}>
              <Link href="/">{`#${item}`}</Link>
            </li>
          ))}
        </ul>
        <button type="button" className="post_info_like_button">
          <LikeIcon />
          <span>{reactions}</span>
        </button>
      </div>
      <Link href={`/blog/${id}`} className="post_viewFullButton" role="button">
        <TranslateTextServer translationKey="button.viewFull" />
      </Link>
    </Card>
  );
}
